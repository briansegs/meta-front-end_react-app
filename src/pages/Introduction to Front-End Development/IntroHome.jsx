import React from "react";

const learningList = [
  "1. HTML",
  "2. CSS",
  "3. How the internet works",
  "4. What is Front-End development",
];

const InfoCard = ({ title, content }) => (
  <div className="m-8 w-fit rounded-lg border-[1px] border-white bg-slate-50">
    <div className="flex items-center rounded-t-lg px-8 py-6 justify-center w-full bg-gradient-to-r  from-blue-400 to-cyan-300">
      <p className="text-white text-3xl font-semibold">{title}</p>
    </div>
    <div className="p-4 flex flex-col">{content}</div>
  </div>
);

const IntroHome = () => {
  return (
    <section className="w-full bg-slate-200">
      <div className="flex items-center w-full bg-slate-50 p-6">
        <h1 className="text-3xl font-medium text-slate-600">
          Introduction to Front-End Development
        </h1>
      </div>

      <div className="w-full flex justify-center">
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
