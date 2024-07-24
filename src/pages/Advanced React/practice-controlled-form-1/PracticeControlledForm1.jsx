import { useState } from "react";

function App() {
  const [score, setScore] = useState(10);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10) {
      alert(
        "Sorry we are insecure but we need you to either give us a good score or tell us why you wont. I know this is wasting your time but... insecure remember?"
      );
      return;
    }
    setComment("");
    setScore(10);
    console.log("Submit!");
  };

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[900px]">
        <form onSubmit={handleSubmit}>
          <fieldset className="w-full p-4">
            <h2 className="text-xl font-medium mb-4">Feedback form</h2>
            <div className="pb-4 flex flex-col gap-2">
              <label htmlFor="score">Score: {score} ⭐</label>
              <input
                className="w-full"
                type="range"
                id="score"
                min={0}
                max={10}
                value={score}
                onChange={(e) => setScore(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="comment">Comment: </label>
              <textarea
                className="w-full h-[100px] border-2 p-1 text-sm rounded-md"
                value={comment}
                id="comment"
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </div>

            <button
              className="mt-4 bg-gradient-to-r from-yellow-300 to-yellow-100 rounded-md px-4 py-2 text-black font-medium"
              type="submit"
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
