import { Link } from "react-router-dom";
import { nav } from "../constants";

const Nav = () => {
  return (
    <nav className="mt-5">
      <ul className="flex flex-row text-center">
        {nav.map(({ path, label }) => (
          <li key={label} className="grow nav">
            <Link
              to={path}
              className="sm:text-base md:text-lg lg:text-lg xl:text-lg"
            >
              {label}
            </Link>
          </li>
        ))}
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
