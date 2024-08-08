import { RadioGroup, RadioOption } from "./Radio";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("");

  const handleSubmit = (e) => {
    setSelected("");
  };

  return (
    <div className="flex h-full justify-center bg-black">
      <div className="bg-white px-12 pt-6 flex flex-col items-start gap-4">
        <h2 className="text-2xl font-semibold">
          How did you hear about Little Lemon?
        </h2>
        <RadioGroup onChange={setSelected} selected={selected}>
          <RadioOption value="social_media">Social Media</RadioOption>
          <RadioOption value="friends">Friends</RadioOption>
          <RadioOption value="advertising">Advertising</RadioOption>
          <RadioOption value="other">Other</RadioOption>
        </RadioGroup>
        <button
          className="bg-blue-400 text-white px-8 py-2 rounded-lg disabled:bg-gray-400 disabled:text-black hover:text-blue-400 hover:bg-slate-200"
          type="submit"
          disabled={!selected}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
