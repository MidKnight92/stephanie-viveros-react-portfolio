import useDocumentTitle from "../useDocumentTitle";

const Home = ({ title }) => {
  useDocumentTitle({ title });
  return (
    <div className="main-content flex">
      <img
        className="rounded-lg max-h-80"
        src="./../../public/images/stephanie-viveros-headshot.jpg"
        alt="Stephanie Viveros headshot"
      />
      <div>
        <h1 className="ml-20 lg:text-6xl xl:text-7xl md:text-5xl sm:text-4xl">
          Hello, I'm Stephanie!
        </h1>
        <h2 className="ml-20 text-4xl mt-10">
          I am a full-stack software engineer.
        </h2>
        <p className="text-2xl ml-20 mt-10">
          I'm passionate about the amazing ways technology can enhance our
          lives. I love crafting user-friendly apps that not only look great but
          also make a positive difference every day.
        </p>
        <p className="font-cta text-xl ml-20 mt-10">
          Let's Build Something Great!
        </p>
        <ul className="flex flex-row gap-10 justify-evenly mt-20">
          <li>
            <a target="_blank" href="https://github.com/MidKnight92">
              <i className="fab fa-github" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/stephanie-viveros/"
            >
              <i className="fab fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="files/Stephanie_Viveros_Resume_2024.pdf" target="_blank">
              <i className="fas fa-file-pdf" />
            </a>
          </li>
        </ul>
      </div>
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
// 	•	Mobile: text-xl
// 	•	Tablet: text-2xl
// 	•	Desktop: text-3xl
// 	•	Large Desktop: text-4xl
// 	•	Body Text:
// 	•	Mobile: text-base
// 	•	Tablet: text-lg
// 	•	Desktop: text-xl
// 	•	Button Text:
// 	•	Mobile: text-base
// 	•	Tablet: text-lg
// 	•	Desktop: text-lg
