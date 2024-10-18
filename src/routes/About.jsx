import useDocumentTitle from "../useDocumentTitle";

const About = ({ title }) => {
  useDocumentTitle({ title });
  return (
    <div>
      <h1>About Me</h1>
      {/* <img className="w-16 md:w-32 lg:w-48"  src={stephanieviveros} alt="stephanie viveros"/> */}
      <p>
        Hi! I’m Stephanie Viveros, a full-stack web developer based in Chicago.
        I have over 3 years of experience in the financial sector and was
        formerly an Associate Consultant, primarly as a software developer.
        Before that, I graduated from the Software Engineering Immersive program
        at General Assembly, where I learned the fundamentals of web development
        in a hands-on, full-time coding bootcamp.
      </p>
      <p>
        After graduation, I continued to grow my skills by completing
        professional courses, including earning my Oracle Certified Associate
        certification in Java 8. Before transitioning into tech, I received a
        B.A. in Entrepreneurship from Purdue University Calumet and gained
        valuable experience in the retail industry, where I developed strong
        problem-solving and customer service skills.
      </p>
      <p>
        I’m passionate about the power of technology and believe it has made our
        world a better place. That’s why I constantly strive to learn and
        improve every day. I love creating beautiful, functional apps and take
        pride in my work.
      </p>
      <p>
        When I’m not coding, I’m a dog mom, coffee lover, book enthusiast,
        nature explorer, and a big fan of Chicago sports — except the Cubs!
      </p>
    </div>
  );
};

export default About;