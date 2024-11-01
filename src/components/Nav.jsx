import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="mt-5">
      <ul className="flex flex-row text-font-color text-center">
        <li className="basis-1/5 text-lg sm:text-base md:text-lg">
          <Link to="/home">Home</Link>
        </li>
        <li className="basis-1/5 text-lg sm:text-base md:text-lg">
          <Link to="/about">About</Link>
        </li>
        <li className="basis-1/5 text-lg sm:text-base md:text-lg">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="basis-1/5 text-lg sm:text-base md:text-lg">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="basis-1/5 text-lg sm:text-base md:text-lg">
          <Link to="/resume">Resume</Link>
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
