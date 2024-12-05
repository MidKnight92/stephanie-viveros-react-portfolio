import me from "../images/me-blue-floral-gray-big.jpg";
import SEO from "../seo/SEO";

const Home = ({ title }) => {
  return (
    <div
      className="h-screen w-full bg-cover fixed bg-top bg-no-repeat text-white md:w-3/4 md:right-0"
      style={{
        backgroundImage: `url(${me})`,
        textShadow: "2px 2px 4px rgb(0,0,0)",
      }}
      aria-hidden="true"
    >
      <SEO
        title={title}
        description="Stephanie Viveros, a passionate full-stack developer out of Chicago."
        keywords="Home"
        path="home"
      />
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>
      <main className="fixed bottom-10">
        <section className="flex flex-col p-4">
          <h1>Hello, I'm Stephanie!</h1>
          <h2 className="text-bolder mt-2 md:ml-20 md:mt-10 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            I am a full-stack software engineer out of Chicago.
          </h2>
          <p className="italic text-bolder font-light md:ml-20 mt-2 md:mt-10">
            Let's Build Something Great!
          </p>
        </section>
        <section className="mt-2">
          <ul className="flex justify-evenly md:hidden">
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
        </section>
      </main>
    </div>
  );
};

export default Home;
