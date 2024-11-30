import { useRouteError } from "react-router-dom";
import useDocumentTitle from "../useDocumentTitle";

const NotFound = ({ title }) => {
  useDocumentTitle(title);
  const error = useRouteError();
  console.log(error);
  return (
    <div className="mt-10 text-center md:col-start-2">
      <h1>Oops!</h1>
      <p className="mt-4">Sorry, an unexpected error has occurred.</p>
      <p className="mt-4">
        <i>{(error?.statusText || error?.message) ?? "404: Page not found."}</i>
      </p>
      <p className="mt-4">: - (</p>
    </div>
  );
};

export default NotFound;
