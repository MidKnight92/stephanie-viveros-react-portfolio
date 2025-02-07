import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import Resume from "./routes/Resume";
import About from "./routes/About";
import Home from "./pages/Home";
import { documentTitle } from "./constants";
import NotFound from "./pages/NotFound";
import App from "./App";
import { Navigate } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home title={documentTitle.home} /> },
      { path: "home", element: <Navigate to="/" /> },
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
        path: "*",
        element: <NotFound title={documentTitle.error} />,
      },
    ],
  },
];

export default routes;
