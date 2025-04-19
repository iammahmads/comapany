import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CustomLink({ to, children, target = "_self" }) {
  return (
    <Link to={to} target={target}>
      <span className="hover:scale-105 transition-all ease-linear flex w-fit my-1 bg-black text-white font-bold gap-5 items-center justify-center sm:px-6 sm:py-2 px-4 py-1 border-3 border-transparent hover:border-yellow-500 font-semiboldr">
        <FaLongArrowAltRight className="text-yellow-500" />
        {children}
      </span>
    </Link>
  );
}
