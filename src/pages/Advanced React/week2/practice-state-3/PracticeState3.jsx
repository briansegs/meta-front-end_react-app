import { useState } from "react";

function App() {
  const [giftCard, setGiftCard] = useState({
    firstName: "BigMan",
    LastName: "ShotGunn",
    text: "Free dinner for 4 guests",
    valid: true,
    instructions: "To use your coupon, click the button",
  });

  const handleClick = () => {
    setGiftCard({
      ...giftCard,
      text: "Your coupon has been used.",
      valid: false,
      instructions: "Please visit our restaurant to renew your gift card..",
    });
  };

  return (
    <div className="bg-neutral-950 text-orange-300 w-full flex justify-center">
      <div className="max-w-[900px] gap-2 flex items-center flex-col py-6 px-12 bg-neutral-900 h-fit m-16 rounded-md">
        <h1 className="text-6xl font-bold text-neutral-100">Gift Card Page</h1>
        <h2 className="text-3xl py-4">
          Customer:{" "}
          <span className="text-neutral-100">
            {giftCard.firstName} {giftCard.LastName}
          </span>
        </h2>
        <h3 className="text-2xl ">{giftCard.text}</h3>
        <p className="text-lg text-neutral-300">{giftCard.instructions}</p>

        {giftCard.valid && (
          <button
            className="text-xl font-semibold rounded-lg bg-gradient-to-r from-yellow-300 to-yellow-100
            text-neutral-800 py-2 px-4 mt-4"
            onClick={handleClick}
          >
            Spend Gift Card
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
