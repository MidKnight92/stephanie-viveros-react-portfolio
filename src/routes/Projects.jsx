import useGithubData from "../useGithubData";
import useDocumentTitle from "../useDocumentTitle";
import { githubUrl } from "../constants";
import { Suspense, useState, lazy } from "react";
import Loading from "../components/Loading";

const Videos = lazy(() => import("../components/Videos"));

const Projects = ({ title }) => {
  const [displayOlderProjects, setDisplayOlderProjects] = useState(false);
  const data = useGithubData();
  useDocumentTitle({ title });
  const isInDevelopmentMode = true;

  const handleClick = () => {
    setDisplayOlderProjects(!displayOlderProjects);
  };
  return (
    <div className="md:main-content text-center">
      <h1>Projects</h1>
      <p>
        This page is under development. I am building out a gallery to showcase
        projects I have done over the years. In the meantime, please feel free
        to take a look at my{" "}
        <a className="text-gray-600 font-bold hover:underline" href={githubUrl}>
          GitHub
        </a>
        . I have {data.public_repos} repositories that consist of personal,
        group, assignments, and lessons that I have done from the start of my
        software engineering journey. Thank you for your understanding.
      </p>
      {isInDevelopmentMode && (
        <>
          <section>
            <h2 className="resume-project-section-header text-center">
              Newer Projects
            </h2>
            <p className="italic">This website being my latest.</p>
          </section>
          {!displayOlderProjects ? (
            <button className="btn" onClick={handleClick}>
              Show Older Projects
            </button>
          ) : (
            <section>
              <h2 className="resume-project-section-header text-center">
                Older Projects
              </h2>
              <Suspense fallback={<Loading />}>
                <Videos />
              </Suspense>
            </section>
          )}
          {displayOlderProjects && (
            <button className="btn" onClick={handleClick}>
              Close Older Projects
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Projects;
