import { nav, iconInfo } from "../constants";
import { useState } from "react";
import NavLink from "../components/NavLink";
import IconLink from "../components/IconLink";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  return (
    <>
      <nav className="z-50 sticky top-0 p-6 bg-black md:absolute lg:flex lg:flex-col lg:w-1/4 lg:h-full ">
        <div className="flex justify-between lg:flex-none lg:justify-normal lg:mx-auto">
          <NavLink
            links={nav.filter(({ label }) => label === "Home")}
            style="text-center mt-1 md:text-xl"
          />
          <i
            onClick={handleClick}
            className={`fa-solid ${
              isOpen ? "fa-x" : "fa-bars"
            } fa-lg lg:hidden mt-4 mr-4`}
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
    </>
  );
};

export default Nav;
