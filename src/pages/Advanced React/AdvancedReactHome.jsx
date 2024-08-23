import InfoCard from "../../components/InfoCard";
import certAdvancedReact from "../../assets/certs/certAdvancedReact.png";
import certDlAdvancedReact from "../../assets/certs/Coursera Advanced React.pdf";
import { Link } from "react-router-dom";
import { ScrollTopOutlet } from "../../util";
import CertButtons from "../../components/CertButtons";

const learningList = [
  "1. Create robust and reusable components with advanced techniques and learn different patterns to reuse common behavior",
  "2. Interact with a remote server and fetch and post data via an API",
  "3. Seamlessly test React applications with React Testing Library",
  "4. Integrate commonly used React libraries to streamline your application development",
];

const AdvancedReactHome = () => {
  return (
    <section className="h-full bg-slate-200">
      <div className="flex items-center w-full bg-slate-50 p-6">
        <h1 className="text-3xl font-medium text-slate-600">Advanced React</h1>
      </div>

      <div className="section-styles">
        <div>
          <CertButtons
            pdfFile={certDlAdvancedReact}
            pdfName="Brian Advanced React"
            verifyLink="https://coursera.org/verify/5O52VHNTQPIL"
          />

          <img alt="Certificate Advanced React" src={certAdvancedReact} />
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
