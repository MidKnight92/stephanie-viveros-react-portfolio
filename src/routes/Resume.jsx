import useDocumentTitle from "../useDocumentTitle";

export default ({ title }) => {
  useDocumentTitle({ title });
  return (<h1>Resume</h1>);
};
