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

  const handleLogout = async () => {
    if (user) {
      await logout();
      navigate("/login");
      setUser("");
    }
  };
  const handleChangePassword = async () => {
    if (user) {
      navigate("/changePassword");
    }
  };

  const navigation = (className, navClassName) => {
    return (
      <ul className={className}>
        <div className={navClassName}>
          <NavButton to="/tasks">Mes tâches</NavButton>
        </div>
        <div className={navClassName}>
          <NavButton to="/reports">Rapports</NavButton>
        </div>
        {user.type === "Organisateur" && (
          <div className={navClassName}>
            <NavButton to="/userCreation">Création d'utilisateur</NavButton>
          </div>
        )}
        {user.type === "Organisateur" && (
          <div className={navClassName}>
            <NavButton to="/object">Objet perdu</NavButton>
          </div>
        )}
        {user.type === "Organisateur" && (
          <div className={navClassName}>
            <NavButton to="/createTask">Nouvelle tâche</NavButton>
          </div>
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
            <button className="lg:hidden" onClick={() => setClicked(!clicked)}>
              <FaList />
            </button>
            <div className="hidden lg:flex">
              {navigation("hidden justify-around align-middle lg:flex")}
            </div>
            <ul className="flex justify-around">
              <NavButton to="/notifications">Notifications</NavButton>
              <button onClick={handleChangePassword} className="mr-4">
                Change password
              </button>
              <button onClick={handleLogout}>Logout</button>
            </ul>
          </nav>
          {clicked && (
            <nav class="lg:hidden bg-blue-400 p-4">{navigation("", "m-3")}</nav>
          )}

          <div className="p-10">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default PrivateLayout;
