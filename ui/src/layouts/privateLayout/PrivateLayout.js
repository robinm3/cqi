import { Navigate, Outlet, useNavigate } from "react-router-dom";
import useUserContext from "../../contexts/useUserContext";
import { logout } from "../../services/Login";
import NavButton from "./NavButton";

const PrivateLayout = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUserContext();

  const handleLogout = async () => {
    if (user) {
      await logout();
      navigate("/login");
      setUser("");
    }
  };

  return (
    <>
      {!user ? (
        <Navigate to={{ pathname: "/login" }} />
      ) : (
        <div>
          <nav className="bg-blue-400 p-6 flex row justify-between ">
            <ul className="flex row justify-around">
              <NavButton to="/tasks">Mes tâches</NavButton>
              <NavButton to="/reports">Rapports</NavButton>
            </ul>
            <ul className="flex row justify-around">
              <button onClick={handleLogout}>Logout</button>
            </ul>
          </nav>

          <div className="p-10">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default PrivateLayout;
