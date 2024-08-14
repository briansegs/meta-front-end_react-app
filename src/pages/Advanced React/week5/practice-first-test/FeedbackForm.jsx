import { useState, useEffect } from "react";

const defaultValues = {
  score: 5,
  comment: "",
};

const FeedbackForm = ({ onSubmit }) => {
  const [state, setState] = useState(defaultValues);

  const handleOnChange = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const isDisabled = state.comment.length < 10 && state.score < 5;

  const placeholder = isDisabled
    ? "Please provide a comment explaining why the experience was not good. Minimum length is 10 characters."
    : "Optional feedback";

  const handleSubmit = (e) => {
    const { score, comment } = state;
    e.preventDefault();
    onSubmit({ score, comment });
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col border-2 border-gray-400 p-4 gap-4 w-[500px]"
    >
      <h3 className="text-2xl font-bold mt-2">Feedback form</h3>

      <label htmlFor="score">Score: {state.score} ⭐</label>
      <input
        type="range"
        id="score"
        min={0}
        max={10}
        value={state.score}
        onChange={handleOnChange}
      />

      <label htmlFor="comment">Comments: </label>
      <textarea
        id="comment"
        placeholder={placeholder}
        className="border-2 border-gray-300 rounded-md p-1 h-[150px]"
        onChange={handleOnChange}
        value={state.comment}
      />

      <button
        type="submit"
        className="rounded-md bg-gray-100 border-2 border-gray-300 py-1 hover:bg-blue-600 hover:text-white hover:border-gray-200 disabled:bg-gray-50 disabled:text-gray-300 disabled:border-gray-200"
        disabled={isDisabled}
      >
        Submit
      </button>
    </form>
  );
};

export default FeedbackForm;
