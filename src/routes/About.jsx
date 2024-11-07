import useDocumentTitle from "../useDocumentTitle";

const About = ({ title }) => {
  useDocumentTitle({ title });
  return (
    <div className="mt-10 md:main-content text-center md:text-pretty">
      <h1 className="">About Me</h1>
      <div className="items-center m-10">
        <p className="mt-2">
          Hello again! I’m a full-stack developer with experience in Angular,
          TypeScript, NestJS, Java, and Spring Boot. My journey into tech
          started in an unexpected place—when my family and I launched our own
          business. I took on the challenge of building our website with no
          prior coding experience, and that experience sparked my passion for
          technology. It led me to complete a full-time coding boot camp where I
          developed a solid foundation in web development.
        </p>

        <p className="mt-2">
          Since then, I’ve been committed to expanding my skills, completing
          courses like Harvard’s CS50 Introduction to Computer Science and
          earning my Oracle Java 8 Programming certification. In addition to my
          technical skills, my retail and entrepreneurial background has
          strengthened my communication, problem-solving, and time management
          skills, as well as my ability to be resourceful and thrive in high-pressure environments.
        </p>

        <p className="mt-2">
          I love creating websites that are both visually engaging and
          user-friendly. Technology excites me because of its power to make a
          positive impact, and I’m always eager to learn and take on new
          challenges. When I’m not coding, you’ll probably find me walking along
          Chicago’s lakefront or enjoying nature with my dog, Gatsby.
        </p>
      </div>
    </div>
  );
};

export default About;
