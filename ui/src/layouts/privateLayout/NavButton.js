import { NavLink } from "react-router-dom";

const NavButton = ({ to, children }) => {
  return (
    <>
      <li>
        <NavLink
          to={to}
          className={({ isActive }) =>
            isActive ? " border p-1 hover:shadow mx-3" : "p-1 hover:shadow mx-3"
          }
        >
          {children}
        </NavLink>
      </li>
    </>
  );
};

export default NavButton;
