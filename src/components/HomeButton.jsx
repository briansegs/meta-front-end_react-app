import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export const HomeButton = () => {
  return (
    <Link to="/meta-front-end_react-app/">
      <button className="text-left ml-4 flex gap-1 text-slate-700 hover:text-blue-500 group">
        <FaHome size={25} />{" "}
        <span className="text-lg font-medium translate-x-[-30px] text-transparent group-hover:translate-x-0  group-hover:text-slate-700 transition">
          Home
        </span>
      </button>
    </Link>
  );
};
