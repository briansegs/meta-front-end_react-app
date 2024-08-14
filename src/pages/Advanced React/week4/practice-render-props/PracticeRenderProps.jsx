import { useEffect, useState } from "react";

const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url.includes("desserts")) {
      setData(["cake", "ice cream", "pie", "brownie"]);
    } else {
      setData(["water", "soda", "juice"]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return render(data);
};

const DessertsCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/desserts"
      render={(data) => <p>{data.length} desserts</p>}
    />
  );
};

const DrinksCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/drinks"
      render={(data) => <h3>{data.length} drinks</h3>}
    />
  );
};

const PracticeRenderProps = () => {
  return (
    <div className="h-full bg-black flex justify-center">
      <div className="bg-white pt-4 px-16 w-[600px] flex flex-col items-center">
        <header className="text-3xl pb-8">Little Lemon Restaurant 🍋</header>
        <DessertsCount />
        <DrinksCount />
      </div>
    </div>
  );
};

export default PracticeRenderProps;
