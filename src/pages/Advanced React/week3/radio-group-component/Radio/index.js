import * as React from "react";

export const RadioGroup = ({ onChange, selected, children }) => {
  // Use React.Children.map and React.cloneElement to clone the children
  // and pass the correct props to each RadioOption
  const RadioOptions = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      onChange,
      checked: child.props.value === selected,
    });
  });

  return <div className="flex flex-col gap-6 my-4">{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
  // Hook up the onChange handler to call the onChange prop passed to RadioGroup
  // Also, make sure to pass the correct checked prop to the input element

  return (
    <div className="flex items-center">
      <input
        onChange={(e) => {
          onChange(e.target.value);
        }}
        id={value}
        type="radio"
        name={value}
        checked={checked}
        value={value}
        className="mr-2 size-6 accent-black"
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
