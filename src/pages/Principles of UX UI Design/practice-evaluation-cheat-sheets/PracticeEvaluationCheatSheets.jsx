import { data } from "./";

const PracticeEvaluationCheatSheets = () => {
  const Method = ({ method }) => (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold text-xl">{method.title}</h3>

      {method.rules.map((rule, index) => (
        <div key={rule.title} className="flex flex-col gap-2">
          <h4 className="font-medium text-lg">
            {`${index + 1}. ${rule.title}`}
          </h4>

          <p className="pl-2">{rule.description}</p>
        </div>
      ))}
    </div>
  );

  return (
    <section className="flex justify-center bg-black px-44">
      <div className="bg-white flex flex-col px-32 py-12 gap-10">
        <h2 className="font-semibold text-4xl">
          UX and UI Evaluation cheat sheets
        </h2>

        <div className="flex flex-col gap-10">
          {data.map((method) => (
            <Method key={method.title} method={method} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeEvaluationCheatSheets;
