import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";

import { pages } from "../constants";
import { HomeButton } from "./HomeButton";

const Nav = () => {
  const location = useLocation();
  const [state, setState] = useState({
    folders: {},
  });

  const handleFolderClick = (e) => {
    const name = e.currentTarget.name;

    setState((prev) => ({
      ...prev,
      folders: {
        ...prev.folders,
        [name]: {
          open:
            prev.folders && prev.folders[name]
              ? !prev.folders[name].open
              : true,
        },
      },
    }));
  };

  return (
    <nav className="p-8 bg-slate-50 border-r-[1px] w-96 outlet-height custom-scrollbar">
      <div>
        <div className="flex flex-col gap-4 ">
          <HomeButton />
          {pages.map((page) => (
            <div
              className={`flex flex-col ${
                location.pathname.startsWith("/" + page.path) &&
                "border-l-[1px]"
              }`}
            >
              <Link
                className={`rounded-e-md px-4 py-2 from-blue-400 to-cyan-300 ${
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
                <div className="flex flex-col items-start">
                  {page.projects.map((project) =>
                    project.folder ? (
                      <div className="flex flex-col">
                        {
                          <button
                            name={project.name}
                            onClick={handleFolderClick}
                            className="flex gap-2 items-center pt-2 pl-2"
                          >
                            <span className="">
                              {state.folders[project.name] &&
                              state.folders[project.name].open ? (
                                <IoMdArrowDropdown className="size-6" />
                              ) : (
                                <IoMdArrowDropright className="size-6" />
                              )}
                            </span>

                            {project.name}
                          </button>
                        }
                        {state.folders[project.name] &&
                          state.folders[project.name].open &&
                          project.projects.map((project) => (
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
                    ) : (
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
                    )
                  )}
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
