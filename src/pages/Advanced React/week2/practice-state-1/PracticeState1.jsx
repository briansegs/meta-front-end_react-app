import { useState } from "react";

function App() {
  const [greeting, setGreeting] = useState({
    greet: "Hell0 there",
    name: "user",
  });

  return (
    <div className="m-0 flex place-items-center flex-col w-full min-w-[320px] min-h-[80vh] text-[#ffffffde] bg-[#242424] leading-[1.5] justify-center items-center font-normal">
      <h1 className="text-[3.2em] leading-[1.1]">{`${greeting.greet} ${greeting.name}`}</h1>
      <div className="p-[2em] flex flex-col items-center justify-center gap-4">
        <button
          className="rounded-lg border-[1px] border-transparent py-[0.6em] px-[1.2em] text-[1em] font-medium bg-[#1a1a1a] cursor-pointer duration-[0.25s] hover:border-[#646cff] focus:outline-4 "
          onClick={() =>
            setGreeting((prevGreeting) => ({
              ...prevGreeting,
              greet: "Sup",
              name: "Bro",
            }))
          }
        >
          Change greeting
        </button>
        <p>Click the above to change the greeting.</p>
      </div>
      <p className="text-[#888]">Click below to rest the greeting.</p>
      <button
        className="rounded-lg border-[1px] border-transparent py-[0.6em] px-[1.2em] text-[1em] font-medium bg-[#1a1a1a] cursor-pointer duration-[0.25s] hover:border-[#646cff] focus:outline-4 mt-4"
        onClick={() =>
          setGreeting((prevGreeting) => ({
            ...prevGreeting,
            greet: "Hell0 there",
            name: "user",
          }))
        }
      >
        Rest Greeting
      </button>
    </div>
  );
}

export default App;
