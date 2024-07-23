import { useState, useRef } from "react";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = 0;
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className="mx-4 my-2">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p
          className="text-xl my-2 border-l-2 pl-1 bg-gradient-to-r from-gray-50 to-white"
          ref={resultRef}
        >
          {result}
        </p>
        <input
          className="block mb-5 text-xl p-[10px] rounded-md border-2"
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button
          className="text-xl p-[10px] rounded-md border-[1px] border-gray-500 bg-gray-100 mr-1"
          onClick={plus}
        >
          add
        </button>
        <button
          className="text-xl p-[10px] rounded-md border-[1px] border-gray-500 bg-gray-100 mr-1"
          onClick={minus}
        >
          minus
        </button>
        <button
          className="text-xl p-[10px] rounded-md border-[1px] border-gray-500 bg-gray-100 mr-1"
          onClick={times}
        >
          times
        </button>
        <button
          className="text-xl p-[10px] rounded-md border-[1px] border-gray-500 bg-gray-100 mr-1"
          onClick={divide}
        >
          divide
        </button>
        <button
          className="text-xl text-white p-[10px] rounded-md border-[1px] border-gray-500 bg-red-500 mr-1"
          onClick={resetInput}
        >
          resetInput
        </button>
        <button
          className="text-xl text-white p-[10px] rounded-md border-[1px] border-gray-500 bg-red-500 mr-1"
          onClick={resetResult}
        >
          resetResult
        </button>
      </form>
    </div>
  );
}

export default App;
