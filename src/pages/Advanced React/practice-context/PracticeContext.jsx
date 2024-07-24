import { UserProvider, useUser } from "./UserContext";

const LoggedInUser = () => {
  const { user } = useUser();

  return (
    <p>
      Hello <span className="text-[#4d4de0]">{user.name}</span>
    </p>
  );
};

const Header = () => {
  return (
    <header className="flex items-center justify-center w-full">
      <h2 className="pr-[40%]">Blog App</h2>
      <LoggedInUser />
    </header>
  );
};

const Page = () => {
  const { user } = useUser();

  return (
    <div className="flex flex-col gap-4">
      <h2>What is asdfas asdfsda?</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p>
        Written by <span className="text-[#4d4de0]">{user.name}</span>
      </p>
    </div>
  );
};

function App() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-8 p-4 max-w-[900px]">
        <Header />
        <Page />
      </div>
    </div>
  );
}

function Root() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}

export default Root;
