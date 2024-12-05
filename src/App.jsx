import { Outlet } from "react-router-dom";
import Nav from "./pages/Nav";
import Footer from "./pages/Footer";
import { HelmetProvider } from "react-helmet-async";
const App = () => {
  return (
    <HelmetProvider>
      <Nav />
      <div className="flex-col md:col-start-2">
        <main className="flex-grow">
          <Outlet />
        </main>
      </div>
      <Footer />
    </HelmetProvider>
  );
};

export default App;
