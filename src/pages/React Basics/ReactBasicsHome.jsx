import { Link } from "react-router-dom";
import InfoCard from "../../components/InfoCard";
import certDlReactBasics from "../../assets/certs/Coursera React Basics.pdf";
import certReactBasics from "../../assets/certs/certReactBasics.png";
import CertButtons from "../../components/CertButtons";

const learningList = [
  "1. Use reusable components to render views where data changes over time",
  "2. Organize React projects to create more scalable and maintainable websites and apps",
  "3. Use props to pass data between components. Create dynamic and interactive web pages and apps",
  "4. Use forms to allow users to interact with the app. Build an application in React",
];

const ReactBasicsHome = () => {
  return (
    <section className="h-full bg-slate-200">
      <div className="flex items-center w-full bg-slate-50 p-6">
        <h1 className="text-3xl font-medium text-slate-600">React Basics</h1>
      </div>

      <div className="section-styles">
        <div>
          <CertButtons
            pdfFile={certDlReactBasics}
            pdfName="Brian React Basics"
            verifyLink="https://coursera.org/verify/WZANDTHSRBWY"
          />

          <img alt="Certificate React Basics" src={certReactBasics} />
        </div>

        <div className="section-row">
          <InfoCard
            title="What I learned"
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
              <div className="max-w-[30rem] flex items-center my-2">
                <p className="text-neutral-600 font-semibold text-xl">
                  Project:
                </p>
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
      </div>
    </section>
  );
};

export default ReactBasicsHome;
