import { Link } from "react-router-dom";

const InfoCard = ({ title, content }) => (
  <div className="m-8 w-fit rounded-lg border-[1px] border-white bg-slate-50">
    <div className="flex items-center rounded-t-lg px-8 py-6 justify-center w-full bg-gradient-to-r  from-blue-400 to-cyan-300">
      <p className="text-white text-3xl font-semibold">{title}</p>
    </div>
    <div className="p-4 flex flex-col">{content}</div>
  </div>
);

const ReactBasicsHome = () => {
  return (
    <section className="w-full bg-slate-200">
      <div className="flex items-center w-full bg-slate-50 p-6">
        <h1 className="text-3xl font-medium text-slate-600">React Basics</h1>
      </div>

      <div className="w-full flex justify-center">
        <InfoCard
          title="Final Project"
          content={
            <div className="max-w-[30rem] flex items-center my-2">
              <p className="text-neutral-600 font-semibold text-xl">Project:</p>
              <Link
                to="/react-basics/calculator-app"
                className="pl-2 text-red-400 hover:text-rose-300"
              >
                Calculator App
              </Link>
            </div>
          }
        />
      </div>
    </section>
  );
};

export default ReactBasicsHome;
