import { Outlet } from "react-router-dom";
import Nav from "./pages/Nav";
import Footer from "./pages/Footer";
const App = () => {
  return (
    <>
      <Nav />
      <div className="flex-col md:col-start-2">
        <main className="flex-grow">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default App;
