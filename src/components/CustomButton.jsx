import { FaLongArrowAltRight } from "react-icons/fa";

export default function CustomButton({ clickHandler, children }) {
  return (
    <button
      onClick={clickHandler}
      className="hover:scale-105 hover:shadow hover:shadow-yellow-500 transition-all ease-linear"
    >
      <span className="flex gap-5 items-center justify-center sm:px-6 sm:py-4 px-4 py-3 border-3 border-yellow-500 font-semibold uppercase">
        <FaLongArrowAltRight className="text-yellow-500" />
        {children}
      </span>
    </button>
  );
}
