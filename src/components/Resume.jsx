import useDocumentTitle from "../useDocumentTitle";

export default ({ title }) => {
  useDocumentTitle({ title });
  return <p>resume</p>;
};