import { Outlet } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import Resume from "./routes/Resume";
import About from "./routes/About";
import Nav from "./components/Nav";
import Terms from "./routes/Terms";
import { documentTitle } from "./constants";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
