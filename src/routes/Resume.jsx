import useDocumentTitle from "../useDocumentTitle";
import { resume } from "../constants";


const expierence = resume.Expierence.map(
  ({ title, company, description, duration, location }) => (
    <div className="mb-6">
      <h3 className="text-lg md:text-lg font-medium">
        {title} /
        <span className="font-light"> {company}</span>
      </h3>
      <p className="text-gray-600 sm:text-sm md:text-sm lg:text-sm">{location}</p>
      <p className="text-gray-600 text-sm sm:text-xs">{duration}</p>
      <p className="text-base md:text-lg leading-relaxed">{description}</p>
    </div>
  )
);

const certifications = resume.Certifications.map(
  ({ title, company, duration }) => (
    <div className="mb-6">
      <h3 className="text-lg md:text-lg font-medium">
        {title} /
        <span className="font-light"> {company}</span>
      </h3>
      <p className="text-gray-600 text-sm sm:text-xs">{duration}</p>
    </div>
  )
);

const Resume = ({ title }) => {
  useDocumentTitle({ title });
  return (
    <div className="main-content text-center">
      <h1>Resume</h1>
      <section className="my-8">
        <h2 className="text-2xl font-semibold sm:text-xl md:text-3xl lg:text-2xl mb-4">
          Experience
        </h2>
        {expierence}
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold sm:text-xl md:text-3xl lg:text-2xl mb-4">
          Education
        </h2>
        <div className="mb-6">
          <h3 className="text-lg md:text-lg font-medium">{resume.Education.title}</h3>
          <p className="text-gray-600 text-sm font-light">{resume.Education.facility}</p>
          <p className="text-gray-600 text-sm sm:text-xs">{resume.Education.duration}</p>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold sm:text-xl md:text-3xl lg:text-2xl mb-4">
          Certifications
        </h2>
        {certifications}
      </section>
      <div>
        <a
          className="btn"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};
export default Resume;
