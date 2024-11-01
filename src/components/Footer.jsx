import { Link } from "react-router-dom";
import { githubUrl, linkedinUrl, phoneNumber } from "../constants";

const Footer = () => {
  const copyrightAndContact = <></>;

  const callToAction = (
    <div>
      <p>
        Let's build something great together!{" "}
        <Link className="text-sm sm:text-xs" to="/contact">
          Get in touch
        </Link>
        .
      </p>
    </div>
  );
  const generalInfo = (
    <>
      <div>
        <p className="text-lg">
          Technologies: JavaScript, React, Angular, TypeScript, Node.js, Java,
          RxJs, Jenkins, Spring
        </p>
      </div>

      <div>
        <p className="text-lg">
          Building modern web experiences with Angular and React.
        </p>
      </div>
    </>
  );

  return (
    <footer className="absolute inset-x-0 font-footer text-font-color">
      <div className="text-center m-10">
        <i className="fas fa-code" />
      </div>
      <section className="flex justify-center gap-x-40 text-center">
        <div className="basis-1">
          <label className="block">Contact</label>
          <a
            className="block text-sm sm:text-xs"
            href="mailto:stephanie.viveros.dev@gmail.com"
          >
            Email
          </a>
          <a className="block text-sm sm:text-xs" href={linkedinUrl}>
            LinkedIn
          </a>
          <a className="block text-sm sm:text-xs" href={githubUrl}>
            GitHub
          </a>
          <a
            className="block text-sm sm:text-xs"
            aria-label={`Phone number: ${phoneNumber}`}
            href={phoneNumber}
          >
            Phone
          </a>
        </div>

        <div className="">
          <label className="block">Pages</label>
          <Link className="text-sm sm:text-xs block" to="/home">
            Home
          </Link>{" "}
          <Link className="text-sm sm:text-xs block" to="/about">
            About
          </Link>{" "}
          <Link className="text-sm sm:text-xs block" to="/projects">
            Projects
          </Link>{" "}
          <Link className="text-sm sm:text-xs block" to="/contact">
            Contact
          </Link>
        </div>
      </section>

      <section className="text-sm sm:text-xs text-center mt-10">
        <div>
          <a
            className="text-sm sm:text-xs"
            href="https://www.privacypolicies.com/live/caace767-2c5e-4c67-ac58-948802b7bee2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>{" "}
          |{" "}
          <a
            className="text-sm sm:text-xs"
            href="https://www.termsfeed.com/live/6733f251-c6e3-4e35-88e4-c824c1de6969"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Use
          </a>
        </div>
        <div>
          <p>
            © {new Date().getFullYear()} Stephanie Viveros | All rights
            reserved.
          </p>
          <p>
            Site built by Stephanie Viveros using React, React Router, Vite,
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
