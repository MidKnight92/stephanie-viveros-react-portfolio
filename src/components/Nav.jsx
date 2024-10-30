import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="flex flex-row">
        <li className="basis-1/5 text-center">
          <Link to="/home">Home</Link>
        </li>
        <li className="basis-1/5 text-center">
          <Link to="/about">About</Link>
        </li>
        <li className="basis-1/5 text-center">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="basis-1/5 text-center">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="basis-1/5 text-center">
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;