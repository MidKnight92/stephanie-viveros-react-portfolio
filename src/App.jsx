import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import About from "./components/About";
import Nav from "./components/Nav";
import Terms from "./components/Terms";
import { documentTitle } from "./constants";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home title={documentTitle.home} />} />
          <Route
            path="/about"
            element={<About title={documentTitle.about} />}
          />
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
           <Route
            path="/terms"
            element={<Terms title={documentTitle.terms} />}
          />
           <Route
            path="/*"
            element={<NotFound title={documentTitle.error} />}
          />
        </Routes>
         <Footer />     
      </Router>
    </div>
  );
}

export default App;
