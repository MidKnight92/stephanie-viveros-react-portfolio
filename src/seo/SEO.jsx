import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, path }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content={`Stephanie Viveros, Chicago, Stephanie Viveros Developer, Viveros, Full-stack Developer, Full-stack Engineer, ${keywords}`}
      />
      <meta property="og:title" content={title} />
      <meta
        property="og:url"
        content={`https://www.stephanieviveros.com/${path}`}
      />
      {!title.includes("404") && (
        <link
          rel="canonical"
          href={`https://www.stephanieviveros.com/${path}`}
        />
      )}
      {title.includes("404") && (
        <meta name="robots" content="noindex, nofollow" />
      )}
    </Helmet>
  );
};

export default SEO;
