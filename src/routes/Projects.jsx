import useGithubData from "../useGithubData";
import useDocumentTitle from "../useDocumentTitle";
import { githubUrl, projects } from "../constants";
import { Suspense, lazy } from "react";
import Loading from "../pages/Loading";

const Videos = lazy(() => import("../pages/Videos"));

const Projects = ({ title }) => {
  const data = useGithubData();
  useDocumentTitle({ title });

  return (
    <div className="text-center mt-20 md:mt-2 md:col-start-2 md:p-6">
      <h1>Projects</h1>
      <div className="m-10">
        <h2 className="resume-project-section-header mt-6">Newer Projects</h2>
        {projects.map(({ projectName, description, url, image }) => (
          <div key={projectName} className="mt-6">
            <img
              src={image}
              alt={projectName}
              className="max-h-40 rounded-2xl mx-auto m-3 md:rounded-lg md:max-h-96"
            />
            <p className="my-4">{description}</p>
            <a
              className="btn block mx-auto max-w-fit text-balance"
              href={url}
              target="_blank"
            >
              {url ? `Play ${projectName}` : "Coming Soon"}
            </a>
          </div>
        ))}
        <section>
          <h2 className="resume-project-section-header text-center mt-6">
            Older Projects
          </h2>
          <Suspense fallback={<Loading />}>
            <Videos />
          </Suspense>
        </section>
        <p className="mt-10">
          I have {data.public_repos} repositories that include personal
          projects, group work, assignments, and lessons from the beginning of
          my software engineering journey. Please feel free to take a look at my{" "}
          <a
            className="text-gray-600 font-bold hover:underline"
            href={githubUrl}
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Projects;
