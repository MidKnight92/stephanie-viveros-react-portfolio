import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import About from "./components/About";
import Nav from "./components/Nav";
import { documentTitle } from "./constants";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home title={documentTitle.home} />} />
        <Route path="/about" element={<About title={documentTitle.about} />} />
        <Route
          path="/contact"
          element={<Contact title={documentTitle.contact} />}
        />
        <Route
          path="/projects"
          element={<Projects title={documentTitle.projects} />}
        />
        <Route
          path="/resume"
          element={<Resume title={documentTitle.resume} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
