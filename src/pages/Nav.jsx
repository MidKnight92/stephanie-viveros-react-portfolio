import { nav, iconInfo } from "../constants";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import IconLink from "../components/IconLink";

const Nav = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  useEffect(() => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.setAttribute("tabindex", "-1");
      mainContent.focus();
    }
  }, [pathname]);
  return (
    <>
      <a href="#main-content" className="sr-only">
        Skip Navigation
      </a>
      <nav
        role="navigation"
        aria-label="site navigation"
        className="fixed top-0 z-50 w-full p-4 bg-black md:flex-col md:w-1/4 md:h-screen md:space-y-60 md:z-0"
      >
        <div className="flex justify-between md:flex-none md:justify-normal">
          <Link
            to={nav[0].path}
            className={`text-white nav font-bold md:mx-auto mt-1 md:text-xl`}
            style={{
              textShadow: "2px 2px 2px rgb(75,85,99)",
            }}
          >
            {nav[0].label}
          </Link>
          <button
            onClick={handleClick}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="md:hidden"
          >
            <i
              className={`fa-solid ${
                isOpen ? "fa-x" : "fa-bars"
              } fa-lg mt-4 mr-4`}
              style={{ color: "whitesmoke" }}
            >
              <span className="text-[0.35rem] mt-4 tracking-[0.25em] block absolute right-[1.8rem]">
                {!isOpen && "Menu"}
              </span>
            </i>
          </button>
        </div>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:block font-bold text-center divide-y-2 divide-gray-600`}
        >
          {nav.slice(1).map(({ label, path }) => (
            <li key={label} className="py-2" onClick={handleClick}>
              <Link
                to={path}
                className={`text-white nav text-base font-bold block`}
                style={{
                  textShadow: "2px 2px 2px rgb(75,85,99)",
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <IconLink
          iconInfo={iconInfo}
          style={{ color: "whitesmoke" }}
          ulStyle="hidden md:flex md:flex-row justify-evenly mt-10"
        />
      </nav>
    </>
  );
};

export default Nav;
