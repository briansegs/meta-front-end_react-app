import { useState, useEffect, useRef } from "react";
export default function App() {
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday");
    } else if (day === "Tuesday") {
      setDay("Wednesday");
    } else if (day === "Wednesday") {
      setDay("Thursday");
    } else if (day === "Thursday") {
      setDay("Friday");
    } else if (day === "Friday") {
      setDay("Monday");
    }
  };
  return (
    <div className="h-full flex justify-center">
      <div className="p-10 flex flex-col items-start w-[550px]">
        <div className="text-5xl font-bold">
          <p className="text-blue-500">
            Today is:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-300">
              {day}
            </span>
          </p>

          {prevDay && (
            <span className="text-lg font-medium">
              Previous work day was:{" "}
              <span className="text-red-500">{prevDay}</span>
            </span>
          )}
        </div>
        <button
          className="text-xl font-semibold bg-black text-white px-4 py-2 rounded-md hover:bg-slate-600 shadow-md hover:shadow-lg mt-8"
          onClick={getNextDay}
        >
          Get next day
        </button>
      </div>
    </div>
  );
}
function usePrevious(val) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current = val;
  }, [val]);

  return ref.current;
}
