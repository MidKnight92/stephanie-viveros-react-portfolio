import { Outlet } from "react-router-dom";
import Nav from "./pages/Nav";
const App = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default App;
