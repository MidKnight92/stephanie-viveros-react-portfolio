import { nav, iconInfo } from "../constants";
import { useState } from "react";
import NavLink from "../components/NavLink";
import IconLink from "../components/IconLink";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  return (
    <nav
      role="navigation"
      aria-label="site navigation"
      className="z-50 sticky top-0 p-6 bg-black md:flex md:flex-col md:w-1/4 md:h-full"
    >
      <div className="flex justify-between md:absolute md:flex-none md:justify-normal md:mx-auto">
        <ul>
          <NavLink
            links={nav.filter(({ label }) => label === "Home")}
            style="mt-1 md:text-xl"
          />
        </ul>
        <i
          onClick={handleClick}
          className={`fa-solid ${
            isOpen ? "fa-x" : "fa-bars"
          } fa-lg md:hidden mt-4 mr-4`}
          style={{ color: "whitesmoke" }}
        ></i>
      </div>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } lg:block font-bold my-auto text-center divide-y-2 divide-gray-600`}
      >
        <NavLink
          handleClick={handleClick}
          links={nav.filter(({ label }) => label !== "Home")}
          style="md:text-lg"
        />
      </ul>
      <IconLink iconInfo={iconInfo} />
    </nav>
  );
};

export default Nav;
