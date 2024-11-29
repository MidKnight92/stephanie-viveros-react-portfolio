import useDocumentTitle from "../useDocumentTitle";
import { resume, resumeUrl } from "../constants";

const Item = ({
  title,
  subtitle,
  duration,
  location,
  facility,
  description,
}) => (
  <div className="mb-4 md:text-right">
    <h3 className="text-lg md:text-lg font-medium">
      {title} /<span className="font-light"> {subtitle}</span>
    </h3>
    {location && (
      <p className="text-gray-600 sm:text-sm md:text-sm lg:text-sm">
        {location}
      </p>
    )}
    {facility && <p className="text-gray-600 text-sm font-light">{facility}</p>}
    {duration && <p className="text-gray-600 text-sm sm:text-xs">{duration}</p>}
    {description && (
      <p className="text-base md:text-lg leading-relaxed">{description}</p>
    )}
  </div>
);

const experience = resume.experience.map(
  ({ title, company, description, duration, location }) => (
    <Item
      key={`${title}-${company}`}
      title={title}
      subtitle={company}
      duration={duration}
      location={location}
      description={description}
    />
  )
);

const certifications = resume.certifications.map(({ title, issuer, year }) => (
  <Item
    key={`${title}-${issuer}`}
    title={title}
    subtitle={issuer}
    duration={year}
  />
));

const education = (
  <Item
    key={`${resume.education.title}-${resume.education.facility}`}
    title={resume.education.title}
    location={resume.education.location}
    subtitle={resume.education.facility}
    duration={resume.education.duration}
  />
);

const Resume = ({ title }) => {
  useDocumentTitle({ title });
  return (
    <div className="mt-20 md:mt-2 md:absolute md:w-3/4 md:right-0 md:p-6">
      <h1 className="text-center mb-10">Resume</h1>
      <div className="m-10">
        <section>
          <h2 className="md:-mb-8 resume-project-section-header">
            <span className="overline">Ex</span>perience
          </h2>
          {experience}
        </section>
        <section className="mt-10">
          <h2 className="md:-mb-8 resume-project-section-header">
            <span className="overline">Ed</span>ucation
          </h2>
          <div className="mb-6">{education}</div>
        </section>
        <section className="mt-8">
          <h2 className="md:-mb-8 resume-project-section-header">
            <span className="overline">Ce</span>rtifications
          </h2>
          {certifications}
        </section>
      </div>
      <div className="my-6">
        <a
          className="btn block mx-auto w-min text-center"
          href={resumeUrl}
          target="_blank"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};
export default Resume;
