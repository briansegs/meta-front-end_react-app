import * as React from "react";
import { pizzaData } from "./data";

const Row = ({ children, spacing }) => {
  const childStyle = {
    marginLeft: `${spacing}px`,
  };

  return (
    <div className="flex mb-6">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            ...(index > 0 ? childStyle : {}),
          },
        });
      })}
    </div>
  );
};

const ManipulatingChildren = () => {
  return (
    <div className="bg-slate-100 w-full justify-center flex">
      <div className="bg-white w-[450px] flex flex-col items-center pt-4 px-6">
        <h1 className="text-2xl pb-8">Receipt 🍕</h1>
        {pizzaData.map((data, index) => (
          <Row key={data.customer + index} spacing={20}>
            <p>{data.name}</p>
            <p>{data.qty}</p>
            <p>${data.price}</p>
            <p>{data.time}</p>
            <p>{data.customer}</p>
          </Row>
        ))}
      </div>
    </div>
  );
};

export default ManipulatingChildren;
