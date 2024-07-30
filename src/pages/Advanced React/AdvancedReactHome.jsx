import InfoCard from "../../components/InfoCard";

const learningList = [
  "1. Context Api for global State",
  "2. Hooks: useRef useState useEffect useReducer",
  "3. Controlled forms",
  "4. State managment",
  "5. Data fetching",
  "6. Custom Hooks",
];

const AdvancedReactHome = () => {
  return (
    <section className="w-full bg-slate-200">
      <div className="flex items-center w-full bg-slate-50 p-6">
        <h1 className="text-3xl font-medium text-slate-600">Advanced React</h1>
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

export default AdvancedReactHome;
