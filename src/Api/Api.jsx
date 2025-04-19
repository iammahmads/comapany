
import { useStore } from "../context/StoreContext";

const host = "https://api.octavio.co";

const headers = async () => {
  const result = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  if (user && user.access_token) {
    result["Authorization"] = `Bearer ${user.access_token}`;
  }

  return result;
};

let pendingRequests = 0;

const useApi = () => {
  const { setLoader } = useStore();

  const incrementLoader = () => {
    if (pendingRequests === 0) {
      setLoader(true);
    }
    pendingRequests++;
  };

  const decrementLoader = () => {
    pendingRequests--;
    if (pendingRequests === 0) {
      setLoader(false);
    }
  };

  const Api = {
    get: async (route, config) => {
      return Api.func(route, null, "GET", config);
    },
    put: async (route, params, config) => {
      return Api.func(route, params, "PUT", config);
    },
    post: async (route, params, config) => {
      return Api.func(route, params, "POST", config);
    },
    delete: async (route, params, config) => {
      return Api.func(route, params, "DELETE", config);
    },
    patch: async (route, params, config) => {
      return Api.func(route, params, "PATCH", config);
    },

    postImage: async (route, key, image, filetype) => {
      const url = `${host}/${route}`;
      const formData = new FormData();
      const user = JSON.parse(localStorage.getItem("user") || "{}");

      formData.append(key, image);
      formData.append("description", "photo description");
      formData.append("file_name", image.name);
      formData.append("file_type", filetype || "products");
      formData.append("account_id", user.account_id);

      let options = {
        method: "POST",
        body: formData,
        headers: {},
      };

      if (user && user.access_token) {
        options.headers = {
          Authorization: `Bearer ${user.access_token}`,
        };
      }

      options = {
        method: "POST",
        body: formData,
        headers: options.headers,
      };

      try {
        const res = await fetch(url, options);
        if (!res.ok) throw new Error("Error posting image");
        const response = await res.json();
        return { data: response, error: undefined };
      } catch (error) {
        toast.error("Error posting image");
        console.error("Error posting image", error);
        return {
          data: undefined,
          error: error.response?.data || error.message,
        };
      }
    },

    func: async (route, params, verb, config) => {
      const { loader = true, toaster = true } = config || {};
      const url = `${host}/${route}`;
      const options = {
        method: verb,
        headers: await headers(),
      };

      if (params) {
        options.body = JSON.stringify(params);
      }

      try {
        if (loader) incrementLoader();
        console.log(verb, url, params || "");
        const res = await fetch(url, options);
        if (res.status === 204) return { data: "done", error: undefined };

        const response = await res.json();
        console.log(verb, url, { response });

        if (res.status >= 200 && res.status < 300) {
          return { data: response, error: undefined };
        }

        if (res.status === 400 && response.details) {
          const message = response.details.split(":")[0].replace(/"/g, "");
          toaster && toast.error(`ERROR: ${message}`);
          return { data: undefined, error: message };
        }

        if (res.status === 500 && response.details) {
          const message =
            response.details
              .split(",")
              .find((part) => part.startsWith('"message":'))
              ?.replace(/("|:|message)/g, "") ?? response.details;
          if (message) {
            toaster && toast.error(`ERROR: ${message}`);
            return { data: undefined, error: message };
          }
        }

        if (res.status === 403) return { data: null, error: "Forbidden" };

        if (res.status > 400) {
          const { error, status_code } = response;
          if (status_code === 401 && error === "Unauthorized") {
            localStorage.removeItem("user");
            return { data: undefined, error: "Unauthorized" };
          }
        }
      } catch (error) {
        console.error("Error:", error);
        toaster && toast.error("An error occurred");
        return {
          data: undefined,
          error: error.response?.data || error.message,
        };
      } finally {
        if (loader) decrementLoader();
      }
    },
  };

  return Api;
};

export default useApi;
