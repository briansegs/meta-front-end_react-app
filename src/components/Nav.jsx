import { Link, useLocation } from "react-router-dom";

import { pages } from "../constants";

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="p-8 bg-slate-50 border-r-[1px]">
      <div>
        <div className="flex flex-col gap-4 w-60 border-l-[1px]">
          {pages.map((page) => (
            <div className="flex flex-col">
              <Link
                className={`rounded-e-md px-4 py-2   from-blue-400 to-cyan-300 ${
                  location.pathname.startsWith("/" + page.path)
                    ? "font-semibold text-white bg-gradient-to-r"
                    : "text-neutral-600"
                } `}
                key={page.name}
                to={`/${page.path}`}
              >
                {page.name}
              </Link>
              {location.pathname.startsWith("/" + page.path) && (
                <div className="flex flex-col items-center">
                  {page.projects.map((project) => (
                    <Link
                      key={project.name}
                      to={`/${project.path}`}
                      className={`text-sm py-[6px] w-full px-4  border-l-[2px] from-slate-100 to-slate-50 ${
                        location.pathname === "/" + project.path
                          ? "bg-gradient-to-r text-slate-800 border-blue-400 font-medium"
                          : "border-slate-50 text-slate-600"
                      }`}
                    >
                      {project.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};
export default Nav;
