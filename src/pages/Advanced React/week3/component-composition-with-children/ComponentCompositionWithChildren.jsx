import { useState } from "react";

const Button = ({ children, backgroundColor, onClick }) => {
  return (
    <button
      style={{ backgroundColor }}
      className="text-white px-24 py-1 rounded-md mb-2 hover:shadow-lg hover:translate-x-1 hover:-translate-y-1"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Alert = ({ children }) => {
  return (
    <>
      <div className="absolute bg-black/30 size-full" />
      <div className="absolute bg-white w-96 px-6 py-4 rounded-xl flex flex-col items-center top-0 bottom-0 my-auto h-fit">
        {children}
      </div>
    </>
  );
};

const DeleteButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} backgroundColor="red">
      Delete
    </Button>
  );
};

const ComponentCompositionWithChildren = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="bg-black w-full flex justify-center relative">
      <div className="bg-white w-[900px] flex flex-col items-center">
        <header className="mt-4 text-2xl">Little Lemon Restaurant 🍋</header>

        <button
          onClick={() => setShowAlert(true)}
          className="underline text-sm mt-14 text-blue-400 hover:text-blue-200"
        >
          delete account
        </button>
        {showAlert && (
          <Alert>
            <h4 className="text-2xl font-bold mb-4">Delete Account</h4>
            <p className="text-center mb-6">
              Are you sure you want to proceed? You will miss all your delicious
              recipies!
            </p>
            <DeleteButton onClick={() => setShowAlert(false)} />
          </Alert>
        )}
      </div>
    </div>
  );
};

export default ComponentCompositionWithChildren;
