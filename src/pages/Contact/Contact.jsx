import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const initialDetails = {
  name: "",
  email: "",
  message: "",
};
const GoogleFormUrl =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLScVuXi_Eik9Xi_cpQNshrSDqzluXEo2iejBvicuBBmwW4eifw/formResponse";

const Contact = () => {
  const [formDetails, setFormDetails] = useState(initialDetails);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  const handleChangeName = (e) => {
    setFormDetails((prev) => ({ ...prev, name: e.target.value }));
  };

  const handleChangeEmail = (e) => {
    setFormDetails((prev) => ({ ...prev, email: e.target.value }));
  };

  const handleChangeMessage = (e) => {
    setFormDetails((prev) => ({ ...prev, message: e.target.value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsFormSubmitting(true);

    // making form data
    const formData = new FormData();
    formData.append("entry.1226206309", formDetails.name);
    formData.append("entry.1802400272", formDetails.email);
    formData.append("entry.195964685", formDetails.message);

    try {
      const response = await fetch(GoogleFormUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      if (
        response.status == 0 ||
        (response.status >= 200 && response.status < 300)
      ) {
        setFormDetails(initialDetails);
        toast.success("Submitted succesfully. We will contact you soon");
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsFormSubmitting(false);
    }
  };

  return (
    <>
      {/* Banner */}
      <section className="bg-black bg-opacity-95 text-white py-20 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-yellow-500">
          Contact
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl">
          Open to hear you.
        </p>
      </section>

      <div className="flex justify-around md:gap-0 gap-8  md:flex-row flex-col">
        <div className="hidden md:flex  items-center flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
            Zero<span className="text-yellow-500">Bug</span>
          </h1>
          <img
            src="/favicon.ico"
            alt="zero bug"
            className="w-[125px] h-[150px] mt-2 hover:scale-110 transition-all ease-linear"
          />
        </div>
        <div className="flex justify-center">
          <Toaster />
          <form
            action="#"
            autoComplete="off"
            className="flex flex-col gap-4 py-4 md:py-6 lg:py-8 text-black"
            onSubmit={handleFormSubmit}
          >
            <div className="flex flex-col justify-center gap-1">
              <label htmlFor="name_ContactForm">Name</label>
              <input
                type="text"
                name="name_ContactForm"
                value={formDetails.name}
                onChange={handleChangeName}
                autoComplete="off"
                required
                className="w-[75vw] border-2 border-black border-opacity-35 rounded-lg py-1 px-2 text-textHeading focus:border-opacity-100 focus:outline-none  sm:w-[70vw] md:w-[60vw] lg:w-[50vw]"
                placeholder="Enter full name"
              />
            </div>

            <div className="flex flex-col justify-center gap-1">
              <label htmlFor="email_ContactForm">Email</label>
              <input
                type="email"
                name="email_ContactForm"
                value={formDetails.email}
                onChange={handleChangeEmail}
                autoComplete="off"
                required
                className="w-[75vw] border-2 border-black border-opacity-35 rounded-lg py-1 px-2 text-textHeading focus:border-opacity-100 focus:outline-none  sm:w-[70vw] md:w-[60vw] lg:w-[50vw]"
                placeholder="Enter email"
              />
            </div>

            <div className="flex flex-col justify-center gap-1">
              <label htmlFor="message_ContactForm">Message</label>
              <textarea
                name="message_ContactForm"
                value={formDetails.message}
                onChange={handleChangeMessage}
                autoComplete="off"
                required
                className="w-[75vw] border-2 border-black border-opacity-35 rounded-lg py-1 px-2 text-textHeading focus:border-opacity-100 focus:outline-none  sm:w-[70vw] md:w-[60vw] lg:w-[50vw]"
                placeholder="Enter message"
              />
            </div>

            <div className="w-full flex flex-col items-center text-yellow-400">
              <input
                type="submit"
                value={isFormSubmitting ? "Sending.." : "Send"}
                disabled={isFormSubmitting}
                className={`${
                  isFormSubmitting ? "bg-gray-600" : "bg-black"
                } px-2 py-0.5 rounded-md hover:scale-105 hover:shadow hover:shadow-yellow-500 transition-all ease-linear cursor-pointer`}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
