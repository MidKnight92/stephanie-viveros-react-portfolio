import { Link } from "react-router-dom";
import {
  nav,
  contactInfo,
} from "../constants";

const siteMap = nav.map(({ path, label }) => (
  <Link key={`footer-${label}`} className="footer-link" to={path}>
    {label}
  </Link>
));

const contact = contactInfo.map((info) => {
  const [key, value] = Object.entries(info)[0];
  return (
    <a
      key={key}
      aria-label={`${key} ${value}`}
      className="footer-link"
      href={value}
    >
      {key}
    </a>
  );
});

const Footer = () => {
  return (
    <footer className="absolute inset-x-0 bottom-0 text-center text-sm sm:text-xs">
      {/* <div className="m-10">
        <i className="fas fa-code" />
      </div> */}
      {/* <section className="hidden md:flex justify-center gap-x-40 text-center">
        <div>
          <label className="block">Contact</label>
          {contact}
        </div>

        <div className="">
          <label className="block">Pages</label>
          {siteMap}
        </div>
      </section> */}

      <section className="mt-10">
        <div>
          <a
            href="https://www.privacypolicies.com/live/caace767-2c5e-4c67-ac58-948802b7bee2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>{" "}
          |{" "}
          <a
            href="https://www.termsfeed.com/live/6733f251-c6e3-4e35-88e4-c824c1de6969"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Use
          </a>
        </div>
        <div>
          <p className="text-sm sm:text-xs">
            © {new Date().getFullYear()} Stephanie Viveros | All rights
            reserved.
          </p>
          <p className="text-sm sm:text-xs">
            Site built by Stephanie Viveros using React, React Router, Vite,
            Font Awesome, Tailwind CSS, & JavaScript.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

// •	Footer Headings:
// •	Mobile: text-base
// •	Tablet: text-lg
// •	Desktop: text-lg

// •	Footer Links and Text:
// •	Mobile: text-xs
// •	Tablet: text-sm
// •	Desktop: text-sm
