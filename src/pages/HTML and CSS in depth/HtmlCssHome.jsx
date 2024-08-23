import { Link } from "react-router-dom";
import InfoCard from "../../components/InfoCard";
import certDlHtmlAndCss from "../../assets/certs/Coursera HTML and CSS in depth.pdf";
import certHtmlAndCss from "../../assets/certs/certHtmlAndCss.png";
import { ScrollTopOutlet } from "../../util";
import CertButtons from "../../components/CertButtons";

const learningList = [
  "1. Create a simple form with a responsive layout using HTML5 and CSS",
  "2. Create a responsive layout using CSS ",
  "3. Create a UI using Bootstrap",
  "4. Implement debugging tools",
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
        <div>
          <CertButtons
            pdfFile={certDlHtmlAndCss}
            pdfName="Brian HTML and CSS in depth"
            verifyLink="https://coursera.org/verify/C3QG28PFDMZY"
          />

          <img alt="Certificate Html and Css" src={certHtmlAndCss} />
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
                  to="/html-and-css-in-depth/project-portfolio"
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

export default HtmlCssHome;
