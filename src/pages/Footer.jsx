const Footer = () => {
  return (
    <footer className="absolute inset-x-0 text-center text-sm sm:text-xs">
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
        </div>
      </section>
    </footer>
  );
};

export default Footer;
