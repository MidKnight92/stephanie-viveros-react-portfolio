import { Link } from "react-router-dom";
import { githubUrl, linkedinUrl, phoneNumber } from "../constants";

const Footer = () => {
  return (
    <footer className="absolute inset-x-0 text-center text-sm sm:text-xs">
      <div className="m-10">
        <i className="fas fa-code" />
      </div>
      <section className="flex justify-center gap-x-40 text-center">
        <div>
          <label className="block">Contact</label>
          <a
            className="footer-link"
            href="mailto:stephanie.viveros.dev@gmail.com"
          >
            Email
          </a>
          <a className="footer-link" href={linkedinUrl}>
            LinkedIn
          </a>
          <a className="footer-link" href={githubUrl}>
            GitHub
          </a>
          <a
            className="footer-link"
            aria-label={`Phone number: ${phoneNumber}`}
            href={phoneNumber}
          >
            Phone
          </a>
        </div>

        <div className="">
          <label className="block">Pages</label>
          <Link className="footer-link" to="/home">
            Home
          </Link>{" "}
          <Link className="footer-link" to="/about">
            About
          </Link>{" "}
          <Link className="footer-link" to="/projects">
            Projects
          </Link>{" "}
          <Link className="footer-link" to="/contact">
            Contact
          </Link>
        </div>
      </section>

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
            Site built by Stephanie Viveros using React, React Router, Vite, Font Awesome,
            Tailwind CSS, & JavaScript.
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
