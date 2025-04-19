const Loader = ( loader  ) => {
    return (
      <>
        <div
          className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 transition-opacity ${
            loader ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-white border-t-transparent text-white"></div>
        </div>
        {loader && (
          <div
            className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40 transition-opacity ${
              loader ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          ></div>
        )}
      </>
    );
  };
  
  export default Loader;
  