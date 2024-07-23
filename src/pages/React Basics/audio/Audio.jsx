import React from "react";

function App() {
  const bird1 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
  );

  const bird2 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
  );

  function toggle1() {
    if (bird1.paused) {
      bird1.play();
    } else {
      bird1.pause();
    }
  }

  function toggle2() {
    if (bird2.paused) {
      bird2.play();
    } else {
      bird2.pause();
    }
  }

  return (
    <div className="px-4 py-2 flex gap-6 items-start">
      <button
        className="bg-gradient-to-r from-orange-400 to-orange-200 text-white px-6 py-4 rounded-lg font-semibold hover:text-red-600"
        onClick={toggle1}
      >
        Caspian Tern 1
      </button>
      <button
        className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-white px-6 py-4 rounded-lg font-semibold hover:text-orange-600"
        onClick={toggle2}
      >
        Caspian Tern 2
      </button>
    </div>
  );
}

export default App;
