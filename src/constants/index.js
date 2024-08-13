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
  LabRateTheMedia,
  ProjectPortfolio,
} from "../pages/HTML and CSS in depth";
import { ReactBasicsHome, Audio, CalculatorApp } from "../pages/React Basics";
import {
  AdvancedReactHome,
  PracticeContext,
  PracticeContextTheme,
  LabImportComponent,
  PracticeUseRef,
  PracticeUseState,
  PracticeControlledForm1,
  PracticeControlledForm2,
  PracticePuttingItTogether,
  PracticeState1,
  PracticeState2,
  PracticeState3,
  PracticeFetchUser1,
  PracticeUseRuducer1,
  PracticeUseRef2,
  LabCustomHook,
  ComponentCompositionWithChildren,
  ManipulatingChildren,
  RadioGroupComponent,
  SpreadAttributes,
  HocCursorPosition,
  PracticeRenderProps,
} from "../pages/Advanced React";

export const pages = [
  {
    name: "Introduction to Front-End Development",
    path: "introduction-to-front-end-development",
    folder: false,
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
    folder: false,
    element: <ProWJavaScriptHome />,
    projects: [],
  },
  {
    name: "Version Control",
    path: "version-control",
    folder: false,
    element: <VersionControlHome />,
    projects: [],
  },
  {
    name: "HTML and CSS in depth",
    path: "html-and-css-in-depth",
    folder: false,
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
      {
        name: "Lab: Rate The Media",
        path: "html-and-css-in-depth/lab-rate-the-media",
        element: <LabRateTheMedia />,
      },
      {
        name: "Project: Portfolio",
        path: "html-and-css-in-depth/project-portfolio",
        element: <ProjectPortfolio />,
      },
    ],
  },
  {
    name: "React Basics",
    path: "react-basics",
    folder: false,
    element: <ReactBasicsHome />,
    projects: [
      {
        name: "Audio",
        path: "react-basics/audio",
        element: <Audio />,
      },
      {
        name: "Calculator App",
        path: "react-basics/calculator-app",
        element: <CalculatorApp />,
      },
    ],
  },
  {
    name: "Advanced React",
    path: "advanced-react",
    folder: false,
    element: <AdvancedReactHome />,
    projects: [
      {
        name: "Week 1",
        folder: true,
        projects: [
          {
            name: "Practice: Context",
            path: "advanced-react/practice-context",
            element: <PracticeContext />,
          },
          {
            name: "Practice: Context Theme",
            path: "advanced-react/practice-context-theme",
            element: <PracticeContextTheme />,
          },
          {
            name: "Lab: Import Component",
            path: "advanced-react/lab-import-component",
            element: <LabImportComponent />,
          },
          {
            name: "Practice: useRef",
            path: "advanced-react/practice-useref",
            element: <PracticeUseRef />,
          },
          {
            name: "Practice: useState",
            path: "advanced-react/practice-usestate",
            element: <PracticeUseState />,
          },
          {
            name: "Practice: Controlled Form 1",
            path: "advanced-react/practice-controlled-form-1",
            element: <PracticeControlledForm1 />,
          },
          {
            name: "Practice: Controlled Form 2",
            path: "advanced-react/practice-controlled-form-2",
            element: <PracticeControlledForm2 />,
          },
          {
            name: "Practice: Putting It Together",
            path: "advanced-react/practice-putting-it-together",
            element: <PracticePuttingItTogether />,
          },
        ],
      },
      {
        name: "Week 2",
        folder: true,
        projects: [
          {
            name: "Practice: State 1",
            path: "advanced-react/practice-state-1",
            element: <PracticeState1 />,
          },
          {
            name: "Practice: State 2",
            path: "advanced-react/practice-state-2",
            element: <PracticeState2 />,
          },
          {
            name: "Practice: State 3",
            path: "advanced-react/practice-state-3",
            element: <PracticeState3 />,
          },
          {
            name: "Practice: Fetch user 1",
            path: "advanced-react/practice-fetch-user-1",
            element: <PracticeFetchUser1 />,
          },
          {
            name: "Practice: useReducer 1",
            path: "advanced-react/practice-usereducer-1",
            element: <PracticeUseRuducer1 />,
          },
          {
            name: "Practice: useRef 2",
            path: "advanced-react/practice-useref-2",
            element: <PracticeUseRef2 />,
          },
          {
            name: "Lab: Custom Hook",
            path: "advanced-react/lab-custom-hook",
            element: <LabCustomHook />,
          },
        ],
      },
      {
        name: "Week 3",
        folder: true,
        projects: [
          {
            name: "Practice: Component composition with children",
            path: "advanced-react/component-composition-with-children",
            element: <ComponentCompositionWithChildren />,
          },
          {
            name: "Practice: Manipulating Children",
            path: "advanced-react/manipulating-children",
            element: <ManipulatingChildren />,
          },
          {
            name: "Lab: Radio Group Component",
            path: "advanced-react/radio-group-component",
            element: <RadioGroupComponent />,
          },
          {
            name: "Practice: Spread Attributes",
            path: "advanced-react/spread-attributes",
            element: <SpreadAttributes />,
          },
        ],
      },
      {
        name: "Week 4",
        folder: true,
        projects: [
          {
            name: "Practice: HOC for cursor position",
            path: "advanced-react/hoc-cursor-position",
            element: <HocCursorPosition />,
          },
          {
            name: "Practice: Render Props",
            path: "advanced-react/practice-render-props",
            element: <PracticeRenderProps />,
          },
        ],
      },
    ],
  },
];
