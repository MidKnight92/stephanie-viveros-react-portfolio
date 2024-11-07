import { Link } from "react-router-dom";
import { nav } from "../constants";
import { useState } from "react";

const links = nav.map(({ path, label }) => (
  <li key={label} className="nav py-2">
    <Link to={path} className="text-white text-base md:text-lg">
      {label}
    </Link>
  </li>
));

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  return (
    <>
      <nav className="sticky top-0 p-6 bg-black md:absolute lg:flex lg:flex-col lg:w-1/4 lg:h-screen ">
        <div className="flex justify-between">
          <i
            onClick={handleClick}
            className={`fa-solid ${
              isOpen ? "fa-x" : "fa-bars"
            } fa-lg lg:hidden mt-4 mr-4`}
            style={{ color: "whitesmoke" }}
          ></i>

          <Link
            to="/home"
            className="hover:font-extrabold text-center text-white font-bold mt-1 lg:mx-auto text-base md:text-xl"
          >
            {"<SV />"}
          </Link>
        </div>

        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } lg:block font-bold my-auto text-center divide-y-2 divide-gray-600 `}
        >
          {links}
        </ul>
      </nav>
      <ul className="hidden lg:flex lg:flex-row gap-10 justify-evenly mt-10">
        <li>
          <a target="_blank" href="https://github.com/MidKnight92">
            <i className="fa-brands fa-github fa-xl md:fa-2xl hover:opacity-50 active:opacity-100" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/stephanie-viveros/"
          >
            <i className="fa-brands fa-linkedin fa-xl md:fa-2xl hover:opacity-50 active:opacity-100" />
          </a>
        </li>
        <li>
          <a
            href="https://docs.google.com/document/d/14taZmzSKYwsTdVMHeAdPs3aSg9U5ZA94pt1s56VxX8g/edit?usp=sharing"
            target="_blank"
          >
            <i className="fa-solid fa-file-lines fa-xl md:fa-2xl hover:opacity-50 active:opacity-100" />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Nav;
