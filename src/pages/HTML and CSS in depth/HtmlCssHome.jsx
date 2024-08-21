import { Link } from "react-router-dom";
import InfoCard from "../../components/InfoCard";

const learningList = [
  "1. Advanced HTML elements",
  "2. CSS features like animations and transitions",
  "3. Layout",
  "4. Design",
];

const HtmlCssHome = () => {
  return (
    <section className="h-full bg-slate-200">
      <div className="flex items-center w-full bg-slate-50 p-6">
        <h1 className="text-3xl font-medium text-slate-600">
          HTML and CSS in depth
        </h1>
      </div>

      <div className="section-styles">
        <div className="section-row">
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
                <p className="text-neutral-600 font-semibold text-xl">
                  Project:
                </p>
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
      </div>
    </section>
  );
};

export default HtmlCssHome;
