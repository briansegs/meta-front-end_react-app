import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState({});

  const fetchUser = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return Object.keys(user).length > 0 ? (
    <section className="bg-cyan-50 w-full flex justify-center p-20">
      <div className="bg-white p-5 flex justify-center h-fit items-center flex-col gap-[10px] rounded-md border-2 border-red-200">
        <h1>Customer data</h1>
        <h2>
          Name:{" "}
          <span className="text-blue-400">{user.results[0].name.first}</span>
        </h2>
        <img
          src={user.results[0].picture.large}
          alt="head-shot"
          height={130}
          width={130}
        />
      </div>
    </section>
  ) : (
    <h1>Pending data...</h1>
  );
}

export default App;
