import useGithubData from "../useGithubData";
import useDocumentTitle from "../useDocumentTitle";
import { githubUrl } from "../constants";
import { Suspense, useState, lazy } from "react";
import Loading from "../pages/Loading";

const Videos = lazy(() => import("../pages/Videos"));

const Projects = ({ title }) => {
  const [displayOlderProjects, setDisplayOlderProjects] = useState(false);
  const data = useGithubData();
  useDocumentTitle({ title });
  const isInDevelopmentMode = false;

  const handleClick = () => {
    setDisplayOlderProjects(!displayOlderProjects);
  };
  return (
    <div className="mt-4 text-center p-10 md:fixed md:w-3/4 md:right-0">
      <h1>Projects</h1>
      <p className="mt-10">
        This page is under development. I am creating a gallery to showcase the
        projects I have completed over the years, in conjunction with rebuilding
        my first personal project, Battle-at-Sea. This project is my
        interpretation of the classic Battleship game, originally created with
        VanillJs, Node.js, CSS, and HTML. The updated version uses React,
        TypeScript, Styled Components, and Zustand for global state management. In the meantime, please feel
        free to take a look at my{" "}
        <a className="text-gray-600 font-bold hover:underline" href={githubUrl}>
          GitHub
        </a>
        . I have {data.public_repos} repositories that include personal
        projects, group work, assignments, and lessons from the beginning of my
        software engineering journey. Thank you for your understanding.
      </p>
      <i className="fa-solid fa-gear fa-xl md:fa-2xl fa-spin-pulse my-8"></i>
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
