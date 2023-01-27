import { Navigate, Outlet, useNavigate } from "react-router-dom";
import useUserContext from "../../contexts/useUserContext";
import { FaList } from "react-icons/fa";
import { logout } from "../../services/Auth";
import NavButton from "./NavButton";
import { useState } from "react";

const PrivateLayout = () => {
  const navigate = useNavigate();
  const { user, setUser, loading } = useUserContext();
  const [clicked, setClicked] = useState(false);
  console.log(user);

  const handleLogout = async () => {
    if (user) {
      await logout();
      navigate("/login");
      setUser("");
    }
  };

  const navigation = (className) => {
    return (
      <ul className={className}>
        <NavButton to="/tasks">Mes tâches</NavButton>
        <NavButton to="/reports">Rapports</NavButton>
        {user.type === "Organisateur" && (
          <NavButton to="/userCreation">Création d'utilisateur</NavButton>
        )}
        {user.type === "Organisateur" && (
          <NavButton to="/object">Objet perdu</NavButton>
        )}
        {user.type === "Organisateur" && (
          <NavButton to="/createTask">Nouvelle tâche</NavButton>
        )}
      </ul>
    );
  };

  return (
    <>
      {loading ? (
        <div className="content-center">Loading...</div>
      ) : !user ? (
        <Navigate to={{ pathname: "/login" }} />
      ) : (
        <div>
          <nav className="bg-blue-400 p-6 flex justify-between ">
            <button class="lg:hidden" onClick={() => setClicked(!clicked)}>
              <FaList />
            </button>
            <div className="hidden lg:flex">
              {navigation("hidden justify-around align-middle lg:flex")}
            </div>
            <ul className="flex justify-around">
              <NavButton to="/notifications">Notifications</NavButton>
              <button onClick={handleLogout}>Logout</button>
            </ul>
          </nav>
          {clicked && <nav class="lg:hidden bg-blue-400">{navigation()}</nav>}

          <div className="p-10">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default PrivateLayout;
