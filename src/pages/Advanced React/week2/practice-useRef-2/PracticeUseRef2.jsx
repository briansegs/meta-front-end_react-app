import { useRef } from "react";

const PracticeUseRef2 = () => {
  const formInputRef = useRef(null);

  const focusInput = () => {
    formInputRef.current.focus();
    console.log(formInputRef);
  };

  return (
    <div className="w-full flex justify-center bg-slate-100">
      <div className="bg-rose-700 size-fit m-12 p-12 rounded-lg flex items-center flex-col border-2 border-slate-900">
        <h1 className="text-4xl font-bold mb-8 text-slate-900">
          Using useRef to access underlying Dom
        </h1>
        <input
          ref={formInputRef}
          type="text"
          className="h-10 rounded-md mb-6"
        />
        <button
          onClick={focusInput}
          className="text-white text-xl font-medium bg-slate-700 px-4 py-2 rounded-lg hover:bg-slate-900"
        >
          Focus input
        </button>
      </div>
    </div>
  );
};

export default PracticeUseRef2;
