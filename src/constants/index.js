import { IntroHome } from "../pages/Introduction to Front-End Development";
import { ProWJavaScriptHome } from "../pages/Programming with JavaScript";
import { VersionControlHome } from "../pages/Version Control";
import { HtmlCssHome } from "../pages/HTML and CSS in depth";
import { ReactBasicsHome } from "../pages/React Basics";
import { AdvancedReactHome } from "../pages/Advanced React";

export const pages = [
  {
    name: "Introduction to Front-End Development",
    path: "introduction-to-front-end-development",
    element: <IntroHome />,
  },
  {
    name: "Programming with JavaScript",
    path: "programming-with-javascript",
    element: <ProWJavaScriptHome />,
  },
  {
    name: "Version Control",
    path: "version-control",
    element: <VersionControlHome />,
  },
  {
    name: "HTML and CSS in depth",
    path: "html-and-css-in-depth",
    element: <HtmlCssHome />,
  },
  {
    name: "React Basics",
    path: "react-basics",
    element: <ReactBasicsHome />,
  },
  {
    name: "Advanced React",
    path: "advanced-react",
    element: <AdvancedReactHome />,
  },
];
