import { useRouteError } from "react-router-dom";
import SEO from "../seo/SEO";

const NotFound = ({ title }) => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex flex-col align-center text-center justify-center min-h-screen p-6">
      <SEO
        title={title}
        description="Sorry, the page you are looking for doesn't exist. Please check the URL or return to the homepage."
        keywords="Not Found"
        path="about"
      />
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
