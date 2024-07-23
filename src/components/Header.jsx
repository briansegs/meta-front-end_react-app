import { Link } from "react-router-dom";
import logo from "../assets/Meta-Logo-1.png";

export const Header = () => {
  return (
    <header className="px-8 py-4 border-b-[1px]">
      <div>
        <Link to={"/"} className="flex items-center gap-1">
          <img
            src={logo}
            alt="meta logo"
            height={100}
            width={100}
            className="object-contain"
          />
          <p className="pt-1 text-xl text-neutral-600">Front-End Developer</p>
        </Link>
      </div>
    </header>
  );
};
