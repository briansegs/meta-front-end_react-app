import { useState } from "react";

const Goalform = (props) => {
  const [formData, setFormData] = useState({ goal: "", by: "" });

  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ ...formData, goal: "", by: "" });
  }

  return (
    <div className="m-0 flex items-center justify-center min-w-[320px] my-12 ">
      <div className="flex flex-col gap-6 ">
        <h1 className="text-3xl font-semibold text-yellow-100">My Goals</h1>
        <form className="flex flex-col gap-4" onSubmit={submitHandler}>
          <input
            className="bg-slate-white rounded-md p-2"
            type="text"
            name="goal"
            value={formData.goal}
            onChange={changeHandler}
            placeholder="Goal"
          />
          <input
            className="bg-slate-white rounded-md p-2"
            type="text"
            name="by"
            value={formData.by}
            onChange={changeHandler}
            placeholder="By..."
          />
          <button className="bg-slate-900 text-gray-100 rounded-md py-4 px-2">
            Submit Goal
          </button>
        </form>
      </div>
    </div>
  );
};

function ListOfGoals(props) {
  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span className="text-yellow-50 pl-2 border-l-2">
            My goal is to {g.goal}, by {g.by}
          </span>
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [allGoals, updateAllGoals] = useState([]);

  function addGoal(goal) {
    updateAllGoals([...allGoals, goal]);
    console.log(`App - allGoals: ${allGoals}`);
  }

  return (
    <div className="max-w-[1280px] my-0 mx-auto p-8 text-center text-gray-900 bg-slate-600 leading-[1.5] font-normal">
      <Goalform onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />
    </div>
  );
}

export default App;
