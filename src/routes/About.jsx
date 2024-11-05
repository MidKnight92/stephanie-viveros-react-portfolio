import useDocumentTitle from "../useDocumentTitle";

const About = ({ title }) => {
  useDocumentTitle({ title });
  return (
    <div className="mt-10 md:main-content text-center md:text-pretty">
      <h1 className="">About Me</h1>
      <div className="items-center m-10">
        <p className="m-2">
          Hello again! Here’s a bit more about my background. I've had the
          privilege of working with a couple of the top companies in the
          financial industry, but my journey into tech actually began closer to
          home. When my family and I started our own business, I decided to
          build our website, which sparked my passion for coding. That led me to
          a full-time coding boot camp at General Assembly, where I learned the
          foundations of web development. Since then, I’ve expanded my skills
          with numerous courses like Harvard’s CS50 Introduction to Computer Science and earned my Oracle Java 8
          programming certification.
        </p>
        <p className="m-2">
          I love creating and designing websites that are both visually engaging
          and user-friendly. I’m passionate about technology and truly believe
          in the positive impact it has on our world. When I’m not coding, you
          can find me out on Chicago's lakefront or enjoying nature with my dog,
          Gatsby.
        </p>
      </div>
    </div>
  );
};

export default About;
