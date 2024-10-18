import useDocumentTitle from "../useDocumentTitle";

const Home = ({ title }) => {
  useDocumentTitle({ title });
  return (
    <div>
      <h1>Hello, I'm Stephanie!</h1>
      <p>
        I'm passionate about the amazing ways technology can enhance our lives.
        I love crafting user-friendly apps that not only look great but also
        make a positive difference every day.
      </p>
      <a>
        <p>Let's Build Something Great!</p>
      </a>
    </div>
  );
};

export default Home;