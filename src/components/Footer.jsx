import { Link } from "react-router-dom";
import { githubUrl, linkedinUrl } from "../constants";

const Footer = () => {
  const copyrightAndContact = (
    <>
      <div>
        <p>
          © {new Date().getFullYear()} Stephanie Viveros | All rights reserved.
        </p>
        <p>
          Email:{" "}
          <a href="mailto:stephanie.viveros.dev@gmail.com">
            stephanie.viveros.dev@gmail.com
          </a>
        </p>
      </div>
      <div>
        <a href={linkedinUrl}>LinkedIn</a> | <a href={githubUrl}>GitHub</a>
      </div>
    </>
  );
  const websiteLinks = (
    <div>
      <Link to="/home">Home</Link> | <Link to="/about">About</Link> |{" "}
      <Link to="/projects">Projects</Link> | <Link to="/contact">Contact</Link>
    </div>
  );
  const callToAction = (
    <div>
      <p>
        Let's build something great together!{" "}
        <Link to="/contact">Get in touch</Link>.
      </p>
    </div>
  );
  const generalInfo = (
    <>
      <div>
        <p>
          Technologies: JavaScript, React, Angular, TypeScript, Node.js, Java,
          RxJs, Jenkins, Spring
        </p>
      </div>

      <div>
        <p>Building modern web experiences with Angular and React.</p>
      </div>

      <div>
        <p>
          Site built by Stephanie Viveros using React, React Router, Vite,
          Tailwind CSS, & JavaScript.
        </p>
      </div>
    </>
  );
  const privacyAndTerms = (
    <div>
      <a
        href="https://www.privacypolicies.com/live/caace767-2c5e-4c67-ac58-948802b7bee2"
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy Policy
      </a>{" "}
      | <Link to="/terms">Terms of Use</Link>
    </div>
  );
  return (
    <footer>
      <section>
        {copyrightAndContact}
        {websiteLinks}
        {callToAction}
        {generalInfo}
        {privacyAndTerms}
      </section>
    </footer>
  );
};

export default Footer;
