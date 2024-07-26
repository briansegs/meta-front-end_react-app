import React from "react";

const InfoCard = ({ title, content }) => (
  <div className="m-8 w-fit rounded-lg border-[1px] border-white bg-slate-50">
    <div className="flex items-center rounded-t-lg px-8 py-6 justify-center w-full bg-gradient-to-r  from-blue-400 to-cyan-300">
      <p className="text-white text-3xl font-semibold">{title}</p>
    </div>
    <div className="p-4 flex flex-col">{content}</div>
  </div>
);

const VersionControlHome = () => {
  return (
    <section className="w-full bg-slate-200">
      <div className="flex items-center w-full bg-slate-50 p-6">
        <h1 className="text-3xl font-medium text-slate-600">Version Control</h1>
      </div>

      <div className="w-full flex justify-center">
        <InfoCard
          title="Page Info"
          content={
            <div className="max-w-[30rem]">
              <p className="text-neutral-600 font-semibold text-xl">Info:</p>
              <p className="text-slate-600 pl-2 pb-4">
                The content of this section doesn't have a visual output which
                is why this section is empty. Below is a link to my Github repo
                that has the work I completed for this section of the course.
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
    </section>
  );
};

export default VersionControlHome;
