import reactLogo from "./assets/react.svg";

import Select from "./components/Select";
import { useState } from "react";
import { isValidEmail } from "./util";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Switch from "./Switch";

function App() {
  const { theme } = useTheme();

  const [job, setJob] = useState("Your profession");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameVisited, setNameVisted] = useState(false);
  const [emailVisited, setEmailVisted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Download for" + name + "sent to" + email);

    console.log({
      name: name,
      email: email,
      job: job,
    });

    clearForm();
  };

  const clearForm = () => {
    setJob("Your profession");
    setName("");
    setEmail("");
    setNameVisted(false);
    setEmailVisted(false);
  };

  const validForm = () => {
    return job !== "Your profession" && name.length >= 3 && isValidEmail(email)
      ? true
      : false;
  };

  const warnName = () => {
    return name.length < 3 && nameVisited;
  };

  const warnEmail = () => {
    return !isValidEmail(email) && emailVisited;
  };

  return (
    <div
      className="flex items-center justify-center w-full h-full relative"
      style={{ backgroundColor: theme === "light" ? "#dfdfe6" : "#1f1d27" }}
    >
      <Switch />

      <div
        className="border-[1px] border-[#e6f1f1] w-[800px] max-h-[650px] h-full flex rounded-[10px]"
        style={{
          backgroundColor: theme === "light" ? "white" : "#17171f",
          border: theme === "light" ? "1px solid #e6f1f1" : "1px solid #080811",
        }}
      >
        <div
          className="w-[50%] h-full flex justify-center items-center rounded-s-[10px]"
          style={{
            backgroundColor: theme === "light" ? "#e6f1f1" : "#080811",
          }}
        >
          <img src={reactLogo} className="h-[18em] logo" alt="React logo" />
        </div>

        <div className="w-1/2 h-full flex flex-col items-start p-8 gap-8">
          <h2
            className="text-2xl font-semibold"
            style={{ color: theme === "light" ? "black" : "slategray" }}
          >
            Download 3 Free Emotional Intelligence Tools Pack PDF
          </h2>
          <p
            className="leading-[32px]"
            style={{ color: theme === "light" ? "black" : "slategray" }}
          >
            By filling out your name and email address below.
          </p>

          <form
            className="w-full flex flex-col"
            onSubmit={handleSubmit}
            name="download"
          >
            <div className="name">
              <input
                className="h-14 pl-4 text-base rounded-[5px] border-none bg-[#e6f1f1] text-[#4e7777] w-full placeholder:text-[#9e9e9e] focus:outline-1 focus:outline-[#6264fd] focus:outline-offset-0"
                id="name"
                type="text"
                placeholder="Your first name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                onBlur={() => setNameVisted(true)}
                style={!warnName() ? { marginBottom: "1.4rem" } : {}}
              />
              {warnName() && (
                <p
                  className="h-[1.4rem] pl-1 m-0 text-sm flex items-center"
                  style={{
                    color: theme === "light" ? "#fc4646" : "lightcoral",
                  }}
                >
                  Name must be longer than 3 characters
                </p>
              )}
            </div>
            <div>
              <input
                className="h-14 pl-4 text-base rounded-[5px] border-none bg-[#e6f1f1] text-[#4e7777] w-full placeholder:text-[#9e9e9e] focus:outline-1 focus:outline-[#6264fd] focus:outline-offset-0"
                id="email"
                type="text"
                placeholder="Email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                onBlur={() => setEmailVisted(true)}
                style={!warnEmail() ? { marginBottom: "1.4rem" } : {}}
              />
              {warnEmail() && (
                <p
                  className="h-[1.4rem] pl-1 m-0 text-sm flex items-center"
                  style={{
                    color: theme === "light" ? "#fc4646" : "lightcoral",
                  }}
                >
                  Enter a valid email address
                </p>
              )}
            </div>

            <Select job={job} setJob={setJob} />
            <button
              className="h-14 text-base rounded-[5px] border-none bg-[#6264fd] text-white font-bold cursor-pointer hover:bg-[#8789fc] disabled:bg-[#486d6d] disabled:cursor-auto focus:outline-none"
              type="submit"
              disabled={!validForm()}
            >
              Download PDF
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;
