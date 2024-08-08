import React from "react";

const Button = ({ type, children, ...buttonProps }) => {
  const className =
    type === "primary"
      ? "bg-emerald-700 text-orange-50"
      : "bg-rose-400 text-yellow-50";
  return (
    <button
      className={`w-32 px-4 py-2  text-xl font-medium  mt-4 rounded-lg hover:bg-black hover:text-yellow-100 ${className}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

const LoginButton = ({ type, children, ...buttonProps }) => {
  return (
    <Button
      type="secondary"
      {...buttonProps}
      onClick={() => {
        alert("Logging in!");
      }}
    >
      {children}
    </Button>
  );
};

const SpreadAttributes = () => {
  return (
    <div className="h-full flex justify-center">
      <div className="flex flex-col p-8 bg-neutral-100 h-fit items-center rounded-2xl mt-8">
        <header className="text-3xl">Little Lemon Restaurant 🍋</header>
        <Button type="primary" onClick={() => alert("Signing up!")}>
          Sign up
        </Button>
        <LoginButton type="secondary">Login</LoginButton>
      </div>
    </div>
  );
};

export default SpreadAttributes;
