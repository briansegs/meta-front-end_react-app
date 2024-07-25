import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import NoPage from "./components/NoPage";
import "./App.css";

import { pages } from "./constants";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
          {pages.map((page) => (
            <>
              <Route key={page.path} path={page.path} element={page.element} />
              {page.projects.map((project) =>
                project.folder ? (
                  project.projects.map((project) => (
                    <Route
                      key={project.name}
                      path={project.path}
                      element={project.element}
                    />
                  ))
                ) : (
                  <Route
                    key={project.name}
                    path={project.path}
                    element={project.element}
                  />
                )
              )}
            </>
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
