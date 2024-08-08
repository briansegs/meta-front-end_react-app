import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted!");
    setName("");
  };

  return (
    <div className="flex h-full justify-center">
      <div className="flex items-center justify-center max-w-[900px] h-[50vh]">
        <form onSubmit={handleSubmit}>
          <fieldset className="flex flex-col gap-4 items-center">
            <div className="field">
              <label className="text-lg mr-2" htmlFor="name">
                Name:
              </label>
              <input
                className="border-2 h-8 text-base py-4 px-1"
                id="name"
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <button
              className="disabled:bg-red-500 disabled:text-gray-300 bg-slate-200 rounded-md w-fit py-1 px-4 text-lg"
              type="submit"
              disabled={!name}
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default App;
