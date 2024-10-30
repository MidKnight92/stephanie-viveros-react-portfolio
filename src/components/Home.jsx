import useDocumentTitle from "../useDocumentTitle";

const Home = ({ title }) => {
  useDocumentTitle({ title });
  return (
    <div>
      <h1 className="text-warm-gold text-6xl font-bold mx-auto">Hello, I'm Stephanie!</h1>
      <p className="text-2xl">
        I'm passionate about the amazing ways technology can enhance our lives.
        I love crafting user-friendly apps that not only look great but also
        make a positive difference every day.
      </p>
      <a>
        <p className="text-xl">Let's Build Something Great!</p>
      </a>
    </div>
  );
};

export default Home;