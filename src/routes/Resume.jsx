import useDocumentTitle from "../useDocumentTitle";

const resume = {
  employmentHistory: [
    {
      title: "Associate Consultant",
      company: "Capgemini",
      location: "Chicago, IL",
      duration: "June 2021 - Sep. 2024",
    },
    {
      title: "Owner",
      company: "U.S.Installers LLC",
      location: "Hammond, IN",
      duration: "July 2018 - Sep. 2019",
    },
    {
      title: "Shift Supervisor",
      company: "Starbucks Coffee Corporation",
      location: "Schererville, IN",
      duration: "May 2012 - June 2023",
    },
    {
      title: "Starbucks Team Member",
      company: "Target Corporation",
      location: "Munster, IN",
      duration: "Oct. 2010 - May 2012",
    },
  ],
  education: {
    title: "Bachelor Arts - Business, Entrepreneurship",
    facility: "Purdue University - Calumet",
    location: "Hammond, IN",
    duration: "2010 - 2014",
  },
  certifications: [
    {
      title: "Software Engineering Immersive",
      company: "General Assembly",
      duration: "2019",
    },
    {
      title: "CS50's Introduction to Computer Science",
      company: "edX",
      duration: "2020",
    },
    {
      title: "Oracle Certified Associate, Java SE 8 Programmer",
      company: "Oracle",
      duration: "2021",
    },
    {
      title: "TypeScript Essential Training",
      company: "LinkedIn Learning",
      duration: "2021",
    },
    {
      title: "Learning Jira Software",
      company: "LinkedIn Learning",
      duration: "2020",
    },
    {
      title: "Postman Essential Training",
      company: "LinkedIn Learning",
      duration: "2021",
    },
    {
      title: "React Basics",
      company: "Coursera",
      duration: "2024",
    },
    {
      title: "Angular - The Complete Guide (2024 Edition)",
      company: "Udemy",
      duration: "2024 - 2025",
    },
    {
      title: "Angular (Basic) Certificate",
      company: "HackerRank",
      duration: "2024",
    },
    {
      title: "Angular (Intermediate) Certificate",
      company: "HackerRank",
      duration: "2024",
    },
  ],
};

const Resume = ({ title }) => {
  useDocumentTitle({ title });
  return (
    <div className="main-content text-center">
      <h1>Resume</h1>
      <main>
        <section>
          <h4>Experience</h4>
          <div>
            <h5>
              Associate Consultant<span> - Capgemini</span>
            </h5>
            <p>Chicago, IL</p>
            <p>June 2021 - Sep. 2024</p>
          </div>
          <div>
            <h5>
              Business Owner<span> - U.S.Installers LLC</span>
            </h5>
            <p>Hammond, IN</p>
            <p>July 2018 - Sep. 2019</p>
          </div>
          <div>
            <h5>
              Shift Supervisor<span> - Starbucks Coffee Corporation</span>
            </h5>
            <p>Schererville, IN</p>
            <p>May 2012 - June 2023</p>
          </div>
          <div>
            <h5>
              Starbucks Team Member<span> - Target Corporation</span>
            </h5>
            <p>Munster, IN</p>
            <p>Oct. 2010 - May 2012</p>
          </div>
        </section>
        <section>
          <h4>Education</h4>
          <div>
            <h5>
              Software Engineer Immersive<span> - General Assembly</span>
            </h5>
            <p>Chicago, IL</p>
            <p>Sep. 2019 - Dec. 2019</p>
          </div>
          <div>
            <h5>
              Bachelor Degree in Business
              <span> - Purdue University Calumet</span>
            </h5>
            <p>Hammond, IN</p>
            <p>2010 - 2014</p>
          </div>
          <div>
            <h5>
              High School Diploma<span> - Whiting High School</span>
            </h5>
            <p>Whiting, IN</p>
            <p>2006 - 2010</p>
          </div>
        </section>
        <section>
          <h4>Professional Certifications</h4>
          <div>
            <h5>
              Oracle Certified Associate, Java SE 8 Programmer
              <span> - Oracle</span>
            </h5>
            <p>Aug. 2021</p>
          </div>
          <div>
            <h5>
              CS50's Introduction to Computer Science
              <span> - Harvardx thru edX</span>
            </h5>
            <p>July 2020</p>
          </div>
          <div>
            <h5>
              Introduction to Java Programming: Starting to code in Java
              <span> - Universidad Carlos III de Madrid thru edX</span>
            </h5>
            <p>September 2020</p>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Resume;
