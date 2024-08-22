import InfoCard from "../../components/InfoCard";
import certAdvancedReact from "../../assets/certs/certAdvancedReact.png";
import certDlAdvancedReact from "../../assets/certs/Coursera Advanced React.pdf";
import { Link } from "react-router-dom";
import { ScrollTopOutlet } from "../../util";

const learningList = [
  "1. Context Api for global State",
  "2. Hooks: useRef useState useEffect useReducer",
  "3. Controlled forms",
  "4. State managment",
  "5. Data fetching",
  "6. Custom Hooks",
];

const AdvancedReactHome = () => {
  return (
    <section className="h-full bg-slate-200">
      <div className="flex items-center w-full bg-slate-50 p-6">
        <h1 className="text-3xl font-medium text-slate-600">Advanced React</h1>
      </div>

      <div className="section-styles">
        <a href={certDlAdvancedReact} download="Brian Advanced React">
          <img alt="Certificate Advanced React" src={certAdvancedReact} />
        </a>

        <div className="section-row">
          <InfoCard
            title="First steps"
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
                  to="/advanced-react/lab-create-portfolio"
                  className="pl-2 text-red-400 hover:text-rose-300"
                  onClick={ScrollTopOutlet}
                >
                  Portfolio
                </Link>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default AdvancedReactHome;
