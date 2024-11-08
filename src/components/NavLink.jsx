import { Link } from "react-router-dom";

const NavLink = ({ links, style, handleClick }) => {
  const results = links.map(({ path, label }) => (
    <li key={label} className="py-2" onClick={handleClick}>
      <Link to={path} className={`text-white nav text-base font-bold ${style}`}>
        {label === "Home" ? "<SV />" : label}
      </Link>
    </li>
  ));
  return results;
};

export default NavLink;