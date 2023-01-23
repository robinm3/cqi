import { Outlet } from "react-router-dom";
import NavButton from "./NavButton";

const Layout = () => {
  return (
    <>
      <nav className="bg-blue-400 p-6">
        <ul className="flex row justify-around">
          <NavButton to="/">Home</NavButton>
          <NavButton to="/potato">Potato</NavButton>
        </ul>
      </nav>

      <div className="p-10">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
