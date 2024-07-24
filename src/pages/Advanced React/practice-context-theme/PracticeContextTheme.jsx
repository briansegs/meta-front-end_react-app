import Switch from "./Switch";
import { ThemeProvider, useTheme } from "./ThemeContext";

const Title = ({ children }) => {
  const { theme } = useTheme();

  return (
    <h2 style={{ color: theme === "light" ? "black" : "white" }}>{children}</h2>
  );
};

const Header = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <Title>Little Lemon 🍕</Title>
      <Switch />
    </div>
  );
};

const Paragraph = ({ children }) => {
  const { theme } = useTheme();

  return (
    <p style={{ color: theme === "light" ? "black" : "white" }}>{children}</p>
  );
};

const Content = () => {
  return (
    <div className="flex flex-col gap-4">
      <Title>When it comes to dough</Title>
      <Paragraph>
        We are a pizza loving family. And for years, I searched and searched and
        searched for the perfect pizza dough recipe. I tried dozens, or more.
        And while some were good, none of them were that recipe that would make
        me stop trying all of the others.
      </Paragraph>
    </div>
  );
};

function App() {
  const { theme } = useTheme();

  return (
    <div className="flex justify-center w-full relative">
      <div
        className="flex flex-col py-8 px-4 gap-12 max-w-[900px]"
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
        }}
      >
        <Header />
        <Content />
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
