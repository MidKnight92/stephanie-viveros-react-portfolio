import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="mt-5">
      <ul className="flex flex-row text-center">
        <li className="grow nav">
          <Link to="/home">Home</Link>
        </li>
        <li className="grow nav">
          <Link to="/about">About</Link>
        </li>
        <li className="grow nav">
          <Link to="/resume">Resume</Link>
        </li>
        <li className="grow nav">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="grow nav">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

// Navigation Menu

// •	Main Menu:
// •	Mobile: text-base
// •	Tablet: text-lg
// •	Desktop: text-lg
// •	Dropdown or Submenu:
// •	Mobile: text-sm
// •	Tablet: text-base
// •	Desktop: text-base
