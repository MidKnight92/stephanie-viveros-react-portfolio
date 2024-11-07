import useDocumentTitle from "../useDocumentTitle";

const Home = ({ title }) => {
  useDocumentTitle({ title });
  return (
    <div className="lg:w-3/4 mt-4 md:main-content float-right flex-grow md:main-content">
      <section className="mx-auto mt-10 lg:flex">
        <img
          className="mx-auto max-h-40 rounded-2xl md:ml-20 lg:rounded-lg md:mt-20 md:max-h-96"
          src="./../../images/me-charcoal-gray-bg.png"
          alt="Stephanie Viveros headshot"
        />
        <div className="mx-4">
          <h1 className="mt-5 md:mt-0 md:ml-20">Hello, I'm Stephanie!</h1>
          <h2 className="mt-5 md:ml-20 md:mt-10 text-gray-600 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            I am a full-stack Software Engineer.
          </h2>
          <p className="mt-5 md:ml-20 md:text-xl lg:text-2xl md:mt-10">
            I'm passionate about the amazing ways technology can improve our
            lives. I love building user-friendly apps that not only look great
            but also make a positive difference.
          </p>
          <p className="italic font-light md:ml-20 mt-5 md:mt-10">
            Let's Build Something Great!
          </p>
        </div>
      </section>
      <section>
        <ul className="flex flex-row gap-10 justify-evenly mt-10 md:hidden">
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
    </div>
  );
};

export default Home;

// •	Title:
// 	•	Mobile: text-4xl
// 	•	Tablet (md): text-5xl
// 	•	Desktop (lg): text-6xl
// 	•	Large Desktop (xl): text-7xl
// 	•	Subtitle:
//
// 	•	Body Text:

// 	•	Button Text:
// 	•	Mobile: text-base
// 	•	Tablet: text-lg
// 	•	Desktop: text-lg
