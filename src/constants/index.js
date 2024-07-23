import {
  IntroHome,
  Assignment1,
  Assignment2,
  Assignment3,
} from "../pages/Introduction to Front-End Development";
import { ProWJavaScriptHome } from "../pages/Programming with JavaScript";
import { VersionControlHome } from "../pages/Version Control";
import {
  HtmlCssHome,
  LabCreateAGridLayout,
  LabForm,
} from "../pages/HTML and CSS in depth";
import { ReactBasicsHome } from "../pages/React Basics";
import { AdvancedReactHome } from "../pages/Advanced React";

export const pages = [
  {
    name: "Introduction to Front-End Development",
    path: "introduction-to-front-end-development",
    element: <IntroHome />,
    projects: [
      {
        name: "Assignment 1",
        path: "introduction-to-front-end-development/assignment1",
        element: <Assignment1 />,
      },
      {
        name: "Assignment 2",
        path: "introduction-to-front-end-development/assignment2",
        element: <Assignment2 />,
      },
      {
        name: "Assignment 3",
        path: "introduction-to-front-end-development/assignment3",
        element: <Assignment3 />,
      },
    ],
  },
  {
    name: "Programming with JavaScript",
    path: "programming-with-javascript",
    element: <ProWJavaScriptHome />,
    projects: [],
  },
  {
    name: "Version Control",
    path: "version-control",
    element: <VersionControlHome />,
    projects: [],
  },
  {
    name: "HTML and CSS in depth",
    path: "html-and-css-in-depth",
    element: <HtmlCssHome />,
    projects: [
      {
        name: "Lab: Create A Grid Layout",
        path: "html-and-css-in-depth/lab-create-a-grid-layout",
        element: <LabCreateAGridLayout />,
      },
      {
        name: "Lab: form",
        path: "html-and-css-in-depth/lab-form",
        element: <LabForm />,
      },
    ],
  },
  {
    name: "React Basics",
    path: "react-basics",
    element: <ReactBasicsHome />,
    projects: [],
  },
  {
    name: "Advanced React",
    path: "advanced-react",
    element: <AdvancedReactHome />,
    projects: [],
  },
];
