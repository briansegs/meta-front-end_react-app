import InfoCard from "../../components/InfoCard";
import certDlIntroToFrontEnd from "../../assets/certs/Coursera Introduction to Front-End Development.pdf";
import certIntroToFrontEnd from "../../assets/certs/certIntroToFrontEnd.png";

const learningList = [
  "1. HTML",
  "2. CSS",
  "3. How the internet works",
  "4. What is Front-End development",
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
        <a
          href={certDlIntroToFrontEnd}
          download="Brian Intro To Front-End Development"
        >
          <img alt="Certificate Intro To Front-End" src={certIntroToFrontEnd} />
        </a>

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
      </div>
    </section>
  );
};

export default IntroHome;
