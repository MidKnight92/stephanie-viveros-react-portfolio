import { Outlet } from "react-router-dom";
import Nav from "./pages/Nav";
import Footer from "./pages/Footer";
const App = () => {
  return (
    <>
      <Nav />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default App;
