import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useBusinessContext } from "../../context/BusinessContext";
import { formatPhoneNumber } from "../../handler/formatPhoneHandler";
import toast from "react-hot-toast";
import useApi from "../../Api/Api";

const inputDetails = [
  {
    labelName: "Name",
    enter: "name",
  },
  {
    labelName: "Email",
    enter: "email",
  },
];

const Contact = () => {
  const { businessData } = useBusinessContext();
  const Api = useApi();

  const { phone_number, email, city, address, state, zip, account_id } =
    businessData || {};

  const initialDetails = {
    name: "",
    email: "",
    message: "",
  };

  const [messagingDetails, setMessagingDetails] = useState(initialDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessagingDetails((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(messagingDetails);

    try {
      let params = {
        ...messagingDetails,
      };
      const response = await Api.post(
        `booking?account_id=${account_id}`,
        params
      );

      if (response) {
        const { error } = response;

        if (!error) {
          console.log(messagingDetails);
        }
      }
    } catch (error) {
      toast.error("An error occurred while sending message.");
    }
  };

  return (
    <>
      <div className="set relative bg-[url('src/assets/images/bg-contact.jpg')] h-screen w-full object-cover bg-center bg-no-repeat bg-cover">
        <div className="absolute bg-overlay top-0 bottom-0 right-0 left-0"></div>
        <div className="sm:w-4/5 max-w-contentWidth relative sm:m-auto p-4 text-white">
          <div className="flex flex-col mt-40 gap-4 justify-end md:pb-0 pb-8">
            <div className="flex md:flex-row md:items-end gap-1 font-semibold flex-col">
              <span className="w-20 h-px mb-1 bg-white"></span>
              <span>Let's Get in Touch</span>
            </div>
            <div className="flex md:flex-col flex-row gap-2 font-extrabold text-5xl md:text-8xl">
              <span>CONTACT</span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative text-white bg-[url('src/assets/images/bg-image.jpg')]">
        <div className="absolute bg-overlay top-0 bottom-0 right-0 left-0"></div>
        <div className="py-20 max-w-contentWidth relative lg:w-4/5 p-4 flex flex-col gap-4  m-auto">
          <div className="flex flex-col gap-10">
            <div className="flex gap-1 flex-col font-semibold">
              <span>/ 01</span>
              <span className="w-20 h-px bg-blue-500"></span>
            </div>
            <div>
              <span className="lg:text-6xl sm:text-5xl text-3xl font-bold">
                Say Hello
              </span>
            </div>
            <div className="flex flex-row items-end gap-1 sm:text-base text-sm font-semibold">
              <span className="w-10 mb-1 h-px bg-white"></span>
              <span>Send Us a message</span>
            </div>
          </div>
          <div className="flex  justify-between md:gap-0 gap-8  md:flex-row flex-col">
            <div className="flex flex-col  lg:w-1/3 md:w-2/5 w-4/5 lg:mt-8 mt-2 font-semibold gap-10">
              <p className="leading-6">
                Whether you’re ready to book your next haircut appointment or
                just want to drop us a line to say what’s up.
              </p>
              <div className="flex gap-4   flex-col ">
                <div className="flex flex-row  items-center gap-2 text-base ">
                  <span className="font-bold text-red-500 ">
                    <IoLocationSharp />
                  </span>
                  <span>{`${address}, ${city}, ${state}, ${zip}`}</span>{" "}
                </div>
                <div className="flex flex-row items-center  gap-2 text-sm ">
                  <span className="font-bold  text-red-500">
                    <FaPhone />
                  </span>
                  {phone_number ? formatPhoneNumber(phone_number) : ""}
                  <span></span>{" "}
                </div>
                <div className="flex flex-row items-center  gap-2 text-sm ">
                  <span className="font-bold  text-red-500">
                    {" "}
                    <MdEmail />
                  </span>
                  {email}
                  <span></span>{" "}
                </div>
              </div>
            </div>

            <div className="md:w-1/2 ">
              <form onSubmit={handleSubmit}>
                {inputDetails.map((item, index) => (
                  <div key={index} className="mb-4">
                    <label className="block font-bold mb-1">{`Your ${item.labelName} (required)`}</label>
                    <input
                      required
                      className="w-full  lg:w-10/12 text-black px-4 py-3"
                      name={item.enter}
                      type="text"
                      value={messagingDetails[item.enter]}
                      onChange={handleChange}
                    />
                  </div>
                ))}
                <div className="mb-4">
                  <label className="block font-bold mb-1">Your Message:</label>
                  <textarea
                    required
                    className="py-4 px-3 text-black w-full  lg:w-10/12"
                    name="message"
                    value={messagingDetails.message}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-black text-sm border-white border-2 text-white p-3 "
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
