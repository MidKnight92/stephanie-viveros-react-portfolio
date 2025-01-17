import IconLink from "../components/IconLink";
import me from "../images/Stephanie-Viveros.jpg";
import SEO from "../seo/SEO";
import { iconInfo } from "../constants";

const Home = ({ title }) => {
  return (
    <div
      className="h-screen w-full bg-cover fixed bg-top bg-no-repeat text-white md:w-3/4 md:right-0"
      style={{
        backgroundImage: `url(${me})`,
        textShadow: "2px 2px 4px rgb(0,0,0)",
      }}
      aria-hidden="true"
    >
      <SEO
        title={title}
        description="Stephanie Viveros, a passionate full-stack developer out of Chicago."
        keywords="Home"
        path="home"
        schema={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          url: "https://www.stephanieviveros.com",
          name: "Stephanie Viveros Developer",
        })}
      />
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>
      <main className="fixed bottom-10">
        <section className="flex flex-col p-4">
          <h1>Hello, I'm Stephanie!</h1>
          <h2 className="text-bolder mt-2 md:ml-20 md:mt-10 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            I am a full-stack software engineer out of Chicago.
          </h2>
          <p className="italic text-bolder font-light md:ml-20 mt-2 md:mt-10">
            Let's Build Something Great!
          </p>
        </section>
        <section className="mt-2">
          <IconLink
            iconInfo={iconInfo}
            ulStyle="flex justify-evenly md:hidden"
          />
        </section>
      </main>
    </div>
  );
};

export default Home;
