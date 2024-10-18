import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import About from "./components/About";
import Terms from "./components/Terms";
import { documentTitle } from "./constants";
import NotFound from "./components/NotFound";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: rootLoader,
    action: rootaction,
    errorElement: <NotFound title={documentTitle.error} />,
    children: [
      {
        path: "about",
        element: <About title={documentTitle.about} />,
      },
      {
        path: "contact",
        element: <Contact title={documentTitle.contact} />,
      },
      {
        path: "projects",
        element: <Projects title={documentTitle.projects} />,
      },
      {
        path: "resume",
        element: <Resume title={documentTitle.resume} />,
      },
      {
        path: "terms",
        element: <Terms title={documentTitle.terms} />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
