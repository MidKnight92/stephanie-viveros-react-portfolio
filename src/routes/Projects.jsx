import useGithubData from "../useGithubData";
import useDocumentTitle from "../useDocumentTitle";

export default ({ title }) => {
  const data = useGithubData();
  useDocumentTitle({ title });
  return (
    <div>
      <h1>Projects</h1>
      <p>{data.public_repos}</p>
    </div>
  );
};
