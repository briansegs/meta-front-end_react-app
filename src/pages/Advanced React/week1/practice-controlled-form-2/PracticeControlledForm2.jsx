import { useState } from "react";
import { validateEmail } from "./utils";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassWord({
      value: "",
      isTouched: false,
    });
    setRole("role");
  };

  const getIsFormValid = () => {
    if (
      firstName &&
      email &&
      password.value.length >= 8 &&
      role !== "role" &&
      validateEmail(email)
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="w-full flex justify-center">
      <form
        className="py-16 px-24 flex justify-center max-w-[900px]"
        onSubmit={handleSubmit}
      >
        <fieldset className="border-2 rounded-md py-8 px-4 flex flex-col gap-6 min-w-[600px]">
          <h2 className="font-black text-2xl">Sign Up</h2>

          <div className="flex flex-col">
            <label className="text-xl font-medium pb-2" htmlFor="firstName">
              First name <span className="text-red-400">*</span>
            </label>
            <input
              className="p-2 text-base border-2 rounded-md"
              type="text"
              placeholder="First name"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xl font-medium pb-2" htmlFor="lastName">
              Last name
            </label>
            <input
              className="p-2 text-base border-2 rounded-md"
              type="text"
              placeholder="Last name"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xl font-medium pb-2" htmlFor="email">
              Email address <span className="text-red-400">*</span>
            </label>
            <input
              className="p-2 text-base border-2 rounded-md"
              type="text"
              placeholder="Email address"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xl font-medium pb-2" htmlFor="password">
              Password <span className="text-red-400">*</span>
            </label>
            <input
              className="p-2 text-base border-2 rounded-md"
              type={checked ? "text" : "password"}
              placeholder="Password"
              id="password"
              value={password.value}
              onChange={(e) =>
                setPassWord({ ...password, value: e.target.value })
              }
              onBlur={() => setPassWord({ ...password, isTouched: true })}
            />

            <div className="flex gap-2 py-2 items-center">
              <input
                className="size-4"
                type="checkbox"
                id="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <label className="text-base font-normal p-0" htmlFor="checkbox">
                Show Password
              </label>
            </div>

            {password.isTouched && password.value.length < 8 && (
              <p className="text-red-400">
                Password should have at least 8 characters
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-xl font-medium pb-2" htmlFor="role">
              Role <span className="text-red-400">*</span>
            </label>
            <select
              className="p-2 text-base border-2 rounded-md bg-white"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>

          <button
            className="py-4 px-16 w-fit text-base font-[550] rounded-md border-none text-white bg-[#4949c0] uppercase cursor-pointer ease duration-[0.2s] hover:enabled:shadow-md disabled:text-black disabled:bg-gray-400"
            type="submit"
            disabled={!getIsFormValid()}
          >
            CREATE ACCOUNT
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default App;
