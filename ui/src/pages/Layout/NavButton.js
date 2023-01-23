import { NavLink } from "react-router-dom";

const NavButton = ({ to, children }) => {
  return (
    <>
      <li>
        <NavLink
          to={to}
          className={({ isActive }) => (isActive ? "text-white p-10" : "p-10")}
        >
          {children}
        </NavLink>
      </li>
    </>
  );
};

export default NavButton;
