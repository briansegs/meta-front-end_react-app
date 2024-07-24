import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    console.log(inputValue);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[900px] my-0 mx-auto p-8 text-center">
        <h1 className="text-[3.2em]">Practice useRef</h1>

        <h2>After Submit: </h2>
        <p>Check the console for your input value.</p>

        <form>
          <input
            className="h-8 w-full mt-4 px-2 text-lg border-2 rounded-md"
            type="text"
            ref={inputRef}
          />
          <button
            className="mt-4 rounded-lg border-[1px] border-transparent py-[0.6em] px-[1.2em] text-[1em] font-medium bg-[#f9f9f9] cursor-pointer duration-[0.25s] hover:border-[#646cff]"
            type="button"
            onClick={handleClick}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
