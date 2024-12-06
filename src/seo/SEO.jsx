import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, path, schema }) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {schema}
      </script>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content={`Stephanie Viveros, Chicago, Stephanie Viveros Developer, Viveros, Full-stack Developer, Full-stack Engineer, full stack developer, full stack engineer, full stack developer for hire near me, full stack developer chicago, hire dedicated full stack developers, hire full stack developers, full stack latina developer, full stack latinx developer, full stack latine developer, React Developer, Angular Developer, TypeScript Developer, ${keywords}`}
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
