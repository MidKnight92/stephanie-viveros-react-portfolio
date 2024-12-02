import useDocumentTitle from "../useDocumentTitle";
import meAndGatsby from "../images/me-and-Gatsby.jpg";

const About = ({ title }) => {
  useDocumentTitle({ title });
  return (
    <div className="mt-20 flex-wrap md:mt-2 md:p-6 md:text-pretty">
      <h1 className="text-center">About Me</h1>
      <div className="m-10">
        <img
          className="max-h-40 rounded-2xl mx-auto md:float-left md:mr-4 md:rounded-lg md:max-h-96 "
          src={meAndGatsby}
          alt="Stephanie Viveros and her dog - Gatsby."
        />
        <p className="mt-2">
          <span className="font-bold">Hello again!</span> I’m a full-stack
          developer with experience in React, Angular, TypeScript, NestJS, Java,
          and Spring Boot. My journey into tech started in an unexpected
          place—helping my family launch our business. I took on the challenge
          of building our company’s website with no prior coding experience, and
          that process sparked my passion for technology. It inspired me to
          complete a full-time coding boot camp, where I built a solid
          foundation in web development.
        </p>
        <p className="mt-2">
          Since then, I’ve been focused on expanding my skills by taking courses
          like{" "}
          <span className="font-bold">
            Harvard’s CS50 Introduction to Computer Science
          </span>{" "}
          and earning my{" "}
          <span className="font-bold">
            Oracle Java 8 Programming certification
          </span>
          . Along the way, I’ve worked with languages like C, Python, Java,
          JavaScript, TypeScript as well as various libraries and frameworks. I’m always eager to adapt, learn, and take
          on whatever challenges come my way.
        </p>
        <p className="mt-2">
          Before transitioning into tech, I worked in retail and helped run my
          family’s business. Those experiences taught me how to juggle multiple
          priorities, communicate effectively, and solve problems on the fly.
          They also sharpened my time management skills and helped me thrive
          under pressure—qualities that have been invaluable in my tech career.
        </p>
        <p className="mt-2">
          These days, I love creating websites that are both visually engaging
          and user-friendly. I’m fascinated by how technology can make a
          positive impact and connect people in meaningful ways. When I’m not
          coding, you’ll probably find me walking along Chicago’s lakefront or
          enjoying the outdoors with my dog, Gatsby.
        </p>
      </div>
    </div>
  );
};

export default About;
