import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "buy_ingredients") return { money: state.money - 10 };
  if (action.type === "sell_a_meal") return { money: state.money + 10 };
  if (action.type === "celebrity_visit") return { money: state.money + 500 };
};

const PracticeUseRuducer1 = () => {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);

  const buttons = [
    {
      title: "Shopping for veggies!",
      onClick: () => dispatch({ type: "buy_ingredients" }),
    },
    {
      title: "Serve a meal to the customer",
      onClick: () => dispatch({ type: "sell_a_meal" }),
    },
    {
      title: "Celebrity Visit",
      onClick: () => dispatch({ type: "celebrity_visit" }),
    },
  ];

  const Button = ({ title, onClick }) => (
    <button
      className="bg-green-400 text-white px-4 py-2 text-xl rounded-lg font-bold  hover:bg-sky-400"
      onClick={onClick}
    >
      {title}
    </button>
  );

  return (
    <div className="h-full flex justify-center bg-slate-100">
      <div className="rounded-md m-12 p-16 bg-emerald-900 h-fit w-[550px] flex flex-col items-center border-2 border-white">
        <h1 className="text-6xl font-bold text-sky-400 pb-16">
          Wallet: <span className="font-normal text-white">{state.money}</span>
        </h1>
        <div className="flex flex-col items-center gap-4">
          {buttons.map((button) => (
            <Button
              title={button.title}
              onClick={button.onClick}
              key={button.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeUseRuducer1;
