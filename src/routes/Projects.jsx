import useGithubData from "../useGithubData";
import useDocumentTitle from "../useDocumentTitle";
import { githubUrl } from "../constants";
import { useState } from "react";

const Projects = ({ title }) => {
  const [displayOlderProjects, setDisplayOlderProjects] = useState(false);
  const data = useGithubData();
  useDocumentTitle({ title });
  const network = (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/MZFUJL42RWo?si=1c4MR37_2yo_embn"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  );
  const mail = (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/MZFUJL42RWo?si=1c4MR37_2yo_embn"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  );
  const wiki = (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/TtKHPUt4Yxs?si=jr8Gpfj4iQ_VN7Po"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  );
  const theBookMark = (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/qJHvN7Vcmso?si=upxwYl8QY2Xw9Fkm"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  );
  const oldPersonalWebsite = (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/qJHvN7Vcmso?si=upxwYl8QY2Xw9Fkm"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  );
  const chromeExtensionCovid19 = (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/DJ84-YiamUc?si=W1tUbMjOzIXi63X3"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  );
  const handleClick = () => {
    setDisplayOlderProjects(!displayOlderProjects);
  };
  return (
    <div>
      <h1>Projects</h1>
      <p>Here are some of the projects I worked on</p>
      <section>
        <h2>Newer Projects</h2>
        <i>This website being my latest.</i>
      </section>
      {!displayOlderProjects ? 
        <button onClick={handleClick}>Show Older Projects</button>
     : (
        <section>
          <h2>Projects I completed for CS50W</h2>
          {network}
          {mail}
          {wiki}
          {theBookMark}
          {oldPersonalWebsite}
          {chromeExtensionCovid19}
        </section>
      )}
      {displayOlderProjects && <button onClick={handleClick}>Close Older Projects</button>}

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
