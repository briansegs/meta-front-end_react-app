import InfoCard from "../../components/InfoCard";
import certDLProgrammingWithJavaScript from "../../assets/certs/Coursera Programming with JavaScript.pdf";
import certProgrammingWithJavaScript from "../../assets/certs/certProgrammingWithJavaScript.png";

const ProWJavaScriptHome = () => {
  return (
    <section className="h-full bg-slate-200">
      <div className="flex items-center w-full bg-slate-50 p-6">
        <h1 className="text-3xl font-medium text-slate-600">
          Programming with JavaScript
        </h1>
      </div>

      <div className="section-styles">
        <a
          href={certDLProgrammingWithJavaScript}
          download="Brian Programming With JavaScript"
        >
          <img
            alt="Certificate Programming With JavaScript"
            src={certProgrammingWithJavaScript}
          />
        </a>

        <InfoCard
          title="Page Info"
          content={
            <div className="max-w-[40rem]">
              <p className="text-neutral-600 font-semibold text-xl">Info:</p>
              <p className="text-slate-600 pl-2 pb-4">
                The content of this section doesn't have a visual output which
                is why this section is empty. Below is a link to my Github repo
                that has the work I completed for this section of the course.
              </p>
              <a
                className="text-red-400 hover:text-rose-300"
                target="_blank"
                href="https://github.com/briansegs/Meta-Front-End_Web_Developer/tree/main/Programming%20with%20JavaScript"
                rel="noreferrer"
              >
                Git Link
              </a>
            </div>
          }
        />
      </div>
    </section>
  );
};

export default ProWJavaScriptHome;
