import React from "react";

const ideaList = [
  "1. Study content",
  "2. Practice through simple examples",
  "3. Test full understanding by making projects",
  "4. Repeat",
];

const HomeInfoCard = ({ title, content }) => (
  <div className="m-8 w-fit rounded-lg border-[1px] border-white bg-slate-50">
    <div className="flex items-center rounded-t-lg px-8 py-6 justify-center w-full bg-gradient-to-r  from-blue-500 from-20% via-sky-400 via-60% to-blue-500 to-100%">
      <p className="text-white text-3xl font-semibold">{title}</p>
    </div>
    <div className="p-4 flex flex-col">{content}</div>
  </div>
);

const Home = () => {
  return (
    <section className="w-full bg-slate-200">
      <div className="flex flex-col gap-4 items-center w-full bg-gradient-to-r from-blue-500 from-20% via-sky-400 via-60% to-blue-500 to-100% p-6">
        <h1 className="text-6xl font-bold text-white">Course Work</h1>
        <h2 className="text-5xl font-bold text-slate-800 bg-white/30 py-2 px-4 rounded-lg mb-2">
          Developing skills - Gaining knowledge
        </h2>
      </div>

      <div className="w-full flex justify-center">
        <HomeInfoCard
          title="Learning from doing"
          content={
            <>
              <p className="text-neutral-600 font-semibold text-xl">
                The idea:
              </p>
              {ideaList.map((idea) => (
                <p key={idea} className="text-slate-600 pl-2">
                  {idea}
                </p>
              ))}
            </>
          }
        />

        <HomeInfoCard
          title="Explore"
          content={
            <div className="max-w-[25rem]">
              <p className="text-slate-600 text-lg leading-7">
                Use the left sidebar to check out my course work, experiments,
                and projects.
              </p>
            </div>
          }
        />
      </div>
    </section>
  );
};

export default Home;
