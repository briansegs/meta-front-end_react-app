import FeedbackForm from "./FeedbackForm";

const PracticeFirstTest = () => {
  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <div className="bg-slate-50 h-full flex justify-center">
      <div className="bg-white w-[650px] flex flex-col items-center p-8">
        <FeedbackForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default PracticeFirstTest;
