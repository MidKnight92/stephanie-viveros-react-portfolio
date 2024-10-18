import useDocumentTitle from "../useDocumentTitle";

const Resume = ({ title }) => {
  useDocumentTitle({ title });
  return (<h1>Resume</h1>);
};
export default Resume;