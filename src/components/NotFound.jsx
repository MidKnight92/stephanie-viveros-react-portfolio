import { useRouteError } from "react-router-dom";
import useDocumentTitle from "../useDocumentTitle";

const NotFound = ({ title }) => {
  useDocumentTitle(title);
  const error = useRouteError();
  console.log(error);
  return (
    <div className="md:main-content">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{(error?.statusText || error?.message) ?? "404: Page not found."}</i>
      </p>
    </div>
  );
};

export default NotFound;
