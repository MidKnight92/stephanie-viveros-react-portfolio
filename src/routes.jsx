import { Navigate } from "react-router-dom";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import Resume from "./routes/Resume";
import About from "./routes/About";
import Home from "./components/Home";
import { documentTitle } from "./constants";
import NotFound from "./components/NotFound";
import App from "./App";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Navigate to="/home" /> },
      { path: "home", element: <Home title={documentTitle.home} /> },
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
