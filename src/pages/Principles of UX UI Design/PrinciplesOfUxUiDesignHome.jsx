import InfoCard from "../../components/InfoCard";

const learningList = [
  "1. Defined the purpose and goals of user experience design.",
  "2. Defined the purpose and goals of user interface design.",
  "3. Set up a Figma account.",
  "4. Navigated the Figma interface.",
  "5. Understand common empathy methodolgies and tools.",
  "6. Created a user persona in Figma.",
];

const PrinciplesOfUxUiDesignHome = () => (
  <section className="h-full bg-slate-200">
    <div className="flex items-center w-full bg-slate-50 p-6">
      <h1 className="text-3xl font-medium text-slate-600">
        Principles of UX/UI Design
      </h1>
    </div>

    <div className="section-styles">
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
      </div>
    </div>
  </section>
);

export default PrinciplesOfUxUiDesignHome;
