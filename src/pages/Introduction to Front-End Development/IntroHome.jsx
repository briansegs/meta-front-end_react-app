import InfoCard from "../../components/InfoCard";
import certDlIntroToFrontEnd from "../../assets/certs/Coursera Introduction to Front-End Development.pdf";
import certIntroToFrontEnd from "../../assets/certs/certIntroToFrontEnd.png";
import CertButtons from "../../components/CertButtons";

const learningList = [
  "1. Distinguish between front-end, back-end, and full-stack developers.",
  "2. The benefits of working with UI frameworks.",
  "3. Create and style a webpage with HTML and CSS.",
];

const IntroHome = () => {
  return (
    <section className="h-full bg-slate-200">
      <div className="flex items-center w-full bg-slate-50 p-6">
        <h1 className="text-3xl font-medium text-slate-600">
          Introduction to Front-End Development
        </h1>
      </div>

      <div className="section-styles">
        <div>
          <CertButtons
            pdfFile={certDlIntroToFrontEnd}
            pdfName="Brian Intro To Front-End Development"
            verifyLink="https://coursera.org/verify/653KFEVVC77R"
          />

          <img alt="Certificate Intro To Front-End" src={certIntroToFrontEnd} />
        </div>

        <InfoCard
          title="What I learned"
          content={
            <>
              <p className="text-neutral-600 font-semibold text-xl">
                Key learnings:
              </p>
              {learningList.map((text) => (
                <p key={text} className="text-slate-600 pl-2">
                  {text}
                </p>
              ))}
            </>
          }
        />
      </div>
    </section>
  );
};

export default IntroHome;
