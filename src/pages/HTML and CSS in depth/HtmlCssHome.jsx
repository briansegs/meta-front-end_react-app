import React from "react";
import { Link } from "react-router-dom";

const learningList = [
  "1. Advanced HTML elements",
  "2. CSS features like animations and transitions",
  "3. Layout",
  "4. Design",
];

const InfoCard = ({ title, content }) => (
  <div className="m-8 w-fit rounded-lg border-[1px] border-white bg-slate-50">
    <div className="flex items-center rounded-t-lg px-8 py-6 justify-center w-full bg-gradient-to-r  from-blue-400 to-cyan-300">
      <p className="text-white text-3xl font-semibold">{title}</p>
    </div>
    <div className="p-4 flex flex-col">{content}</div>
  </div>
);

const HtmlCssHome = () => {
  return (
    <section className="w-full bg-slate-200">
      <div className="flex items-center w-full bg-slate-50 p-6">
        <h1 className="text-3xl font-medium text-slate-600">
          HTML and CSS in depth
        </h1>
      </div>

      <div className="w-full flex justify-center">
        <InfoCard
          title="Content and Style"
          content={
            <>
              <p className="text-neutral-600 font-semibold text-xl">
                Key learnings:
              </p>
              {learningList.map((idea) => (
                <p key={idea} className="text-slate-600 pl-2">
                  {idea}
                </p>
              ))}
            </>
          }
        />

        <InfoCard
          title="Final Project"
          content={
            <div className="max-w-[30rem] flex items-center">
              <p className="text-neutral-600 font-semibold text-xl">Project:</p>
              <Link
                to="/html-and-css-in-depth/project-portfolio"
                className="pl-2 text-red-400 hover:text-rose-300"
              >
                Portfolio Link
              </Link>
            </div>
          }
        />
      </div>
    </section>
  );
};

export default HtmlCssHome;
