import { useRouteError } from "react-router-dom";
import useDocumentTitle from "../useDocumentTitle";

const NotFound = ({ title }) => {
  useDocumentTitle(title);
  const error = useRouteError();
  console.log(error);
  return (
    <div className="text-font-color outline outline-offset-2 outline-1 m-20">
      <h1 className="font-header text-6xl font-bold mx-auto">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{(error?.statusText || error?.message) ?? "404: Page not found."}</i>
      </p>
    </div>
  );
};

export default NotFound;
