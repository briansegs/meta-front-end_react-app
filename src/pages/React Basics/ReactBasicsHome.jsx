import { Link } from "react-router-dom";
import InfoCard from "../../components/InfoCard";
import certDlReactBasics from "../../assets/certs/Coursera React Basics.pdf";
import certReactBasics from "../../assets/certs/certReactBasics.png";

const ReactBasicsHome = () => {
  return (
    <section className="h-full bg-slate-200">
      <div className="flex items-center w-full bg-slate-50 p-6">
        <h1 className="text-3xl font-medium text-slate-600">React Basics</h1>
      </div>

      <div className="section-styles">
        <a href={certDlReactBasics} download="Brian React Basics">
          <img alt="Certificate React Basics" src={certReactBasics} />
        </a>

        <InfoCard
          title="Final Project"
          content={
            <div className="max-w-[30rem] flex items-center my-2">
              <p className="text-neutral-600 font-semibold text-xl">Project:</p>
              <Link
                to="/react-basics/calculator-app"
                className="pl-2 text-red-400 hover:text-rose-300"
              >
                Calculator App
              </Link>
            </div>
          }
        />
      </div>
    </section>
  );
};

export default ReactBasicsHome;
