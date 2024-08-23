import InfoCard from "../../components/InfoCard";
import certDLVersionControl from "../../assets/certs/Coursera Version Control.pdf";
import certVersionControl from "../../assets/certs/certVersionControl.png";
import CertButtons from "../../components/CertButtons";

const learningList = [
  "1. Implement Version Control systems ",
  "2. Navigate and configure using the command line ",
  "3. Use a GitHub repository. Create a GitHub repository ",
  "4. Manage code revisions ",
];

const VersionControlHome = () => {
  return (
    <section className="h-full bg-slate-200">
      <div className="flex items-center w-full bg-slate-50 p-6">
        <h1 className="text-3xl font-medium text-slate-600">Version Control</h1>
      </div>

      <div className="section-styles">
        <div>
          <CertButtons
            pdfFile={certDLVersionControl}
            pdfName="Brian Version Control"
            verifyLink="https://coursera.org/verify/EFEUMPLULZY7"
          />

          <img alt="Certificate Version Control" src={certVersionControl} />
        </div>

        <div className="section-row">
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

          <InfoCard
            title="Page Info"
            content={
              <div className="max-w-[40rem]">
                <p className="text-neutral-600 font-semibold text-xl">Info:</p>
                <p className="text-slate-600 pl-2 pb-4">
                  The content of this section doesn't have a visual output which
                  is why this section is empty. Below is a link to my Github
                  repo that has the work I completed for this section of the
                  course.
                </p>
                <a
                  className="text-red-400 hover:text-rose-300"
                  target="_blank"
                  href="https://github.com/briansegs/Meta-Front-End_Web_Developer/tree/main/Version_Control"
                  rel="noreferrer"
                >
                  Git Link
                </a>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default VersionControlHome;
