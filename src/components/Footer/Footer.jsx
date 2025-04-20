
import {
  RiGithubFill,
  RiLinkedinFill,
  RiWhatsappFill,
} from "react-icons/ri";


const Footer = () => {

  const contact = {
    address: "Chenab Chowk, Faisalabad, Pakistan",
    Phone: "+92-305-7677534",
    Email: "s.m.sabbor09@gmail.com",
  };

  return (
    <>
      <footer className="bac relative w-full text-white bg-black border-t border-yellow-400">
        <div className="relative  max-w-contentWidth lg:w-10/12 m-auto w-full  p-2 sm:p-4 py-9">
          <div className="flex sm:flex-row flex-col w-full justify-center gap-10 md:gap-1 text-center  sm:text-left   sm:justify-between">
            <div className="flex flex-col gap-3 ">
              <h3 className="font-bold text-2xl mb-2">Contact</h3>
              <div className="flex flex-col gap-3 ">
                <div className="flex lg:flex-row sm:w-full p-4 sm:p-0  sm:flex-col sm:justify-start justify-center gap-1 text-sm ">
                  <address>{contact.address}</address>
                </div>
                <div className="flex lg:flex-row sm:w-full p-4 sm:p-0  sm:flex-col sm:justify-start justify-center gap-1 text-sm ">
                  <a target="_blank" href={`tel:${contact.Phone}`}>
                    {contact.Phone}
                  </a>
                </div>
                <div className="flex lg:flex-row sm:w-full p-4 sm:p-0  sm:flex-col sm:justify-start justify-center gap-1 text-sm ">
                  <a target="_blank" href={`mailto:${contact.Email}`}>
                    {contact.Email}
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-2xl mb-2">Keep in touch</h3>
              <div className="flex gap-2 sm:justify-start justify-center text-3xl">
                <span className="text-blue  bg-white rounded">
                  <a href="#" target="_blank">
                    <RiLinkedinFill/>
                  </a>
                </span>
                <span className="text-black bg-white rounded">
                  <a href="" target="_blank">
                    <RiGithubFill />
                  </a>
                </span>
                <span className="text-green-500  bg-white rounded">
                  <a
                    href="https://api.whatsapp.com/send/?phone=%2B923057677534&text=Hi%21+I+need+your+assistance."
                    target="_blank"
                  >
                    <RiWhatsappFill />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-black z-[100] text-center  sm:text-base text-xs text-white">
          <p className="pb-2 ">
            <span>Copyright &copy; {new Date().getFullYear()}</span>
            <span className="text-yellow-500 und">&nbsp; Zero Bug &nbsp;</span>
            <span>| All rights reserved.</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
