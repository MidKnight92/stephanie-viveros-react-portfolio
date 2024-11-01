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

  const handleClick = () => {
    setDisplayOlderProjects(!displayOlderProjects);
  };
  return (
    <div className="text-font-color outline outline-offset-2 outline-1 m-20 p-5">
      <h1 className="font-header text-6xl font-bold mx-auto">Projects</h1>
      <p>Here are some of the projects I worked on</p>
      <section>
        <h2>Newer Projects</h2>
        <i>This website being my latest.</i>
      </section>
      {!displayOlderProjects ? (
        <button onClick={handleClick}>Show Older Projects</button>
      ) : (
        <section>
          <h2>Projects I completed for CS50W</h2>
          <Suspense fallback={<Loading />}>
            <Videos />
          </Suspense>
        </section>
      )}
      {displayOlderProjects && (
        <button onClick={handleClick}>Close Older Projects</button>
      )}

      <p>
        Take a look at my <a href={githubUrl}>GitHub</a>. I have{" "}
        {data.public_repos} repositories that consist of personal, group,
        assignments, and lessons that I have done from the start of my developer
        journey.
      </p>
    </div>
  );
};

export default Projects;
