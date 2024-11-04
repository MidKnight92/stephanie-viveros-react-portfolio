import { Link } from "react-router-dom";
import { nav } from "../constants";

const links = nav.map(({ path, label }) => (
  <li key={label} className="grow nav">
    <Link
      to={path}
      className="text-white text-base md:text-lg md:text-black lg:text-lg xl:text-lg"
    >
      {label}
    </Link>
  </li>
));

const Nav = () => {
  return (
    <nav className="py-5 md:mt-5 bg-black md:bg-transparent lg:bg-transparent xl:bg-transparent">
      <ul className="flex flex-row text-center divide-x-2 divide-gray-600 md:divide-x-0 lg:divide-x-0 xl:divide-x-0">
        {links}
      </ul>
    </nav>
  );
};

export default Nav;
