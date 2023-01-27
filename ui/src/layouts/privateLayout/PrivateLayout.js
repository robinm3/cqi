import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import useUserContext from '../../contexts/useUserContext'
import { FaList } from 'react-icons/fa'
import { logout } from '../../services/Auth'
import NavButton from './NavButton'
import { useState } from 'react'

const PrivateLayout = () => {
<<<<<<< HEAD
  const navigate = useNavigate()
  const { user, setUser } = useUserContext()
  const [clicked, setClicked] = useState(false)
  console.log(user)
=======
  const navigate = useNavigate();
  const { user, setUser, loading } = useUserContext();
  const [clicked, setClicked] = useState(false);
>>>>>>> 313e307c31f2dbfff67fc3fafe3eb48b0f7e38ba

  const handleLogout = async () => {
    if (user) {
      await logout()
      navigate('/login')
      setUser('')
    }
<<<<<<< HEAD
  }
=======
  };
  const handleChangePassword = async () => {
    if (user) {
      navigate("/changePassword");
    }
  };
>>>>>>> 313e307c31f2dbfff67fc3fafe3eb48b0f7e38ba

  const navigation = (className, navClassName) => {
    return (
      <ul className={className}>
<<<<<<< HEAD
        <NavButton to="/tasks">Mes tâches</NavButton>
        <NavButton to="/reports">Rapports</NavButton>
        {user.type === 'Organisateur' && (
          <NavButton to="/userCreation">Création d'utilisateur</NavButton>
        )}
        {user.type === 'Organisateur' && (
          <NavButton to="/object">Objet perdu</NavButton>
        )}
        {user.type === 'Organisateur' && (
          <NavButton to="/createTask">Nouvelle tâche</NavButton>
=======
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
>>>>>>> 313e307c31f2dbfff67fc3fafe3eb48b0f7e38ba
        )}
      </ul>
    )
  }

  return (
    <>
<<<<<<< HEAD
      {!user ? (
        <Navigate to={{ pathname: '/login' }} />
=======
      {loading ? (
        <div className="content-center">Loading...</div>
      ) : !user ? (
        <Navigate to={{ pathname: "/login" }} />
>>>>>>> 313e307c31f2dbfff67fc3fafe3eb48b0f7e38ba
      ) : (
        <div>
          <nav className="bg-blue-400 p-6 flex justify-between ">
            <button className="lg:hidden" onClick={() => setClicked(!clicked)}>
              <FaList />
            </button>
            <div className="hidden lg:flex">
              {navigation('hidden justify-around align-middle lg:flex')}
            </div>
            <ul className="flex justify-around">
              <NavButton to="/notifications">Notifications</NavButton>
              <button onClick={handleChangePassword}>Change password</button>
              <button onClick={handleLogout}>Logout</button>
            </ul>
          </nav>
          {clicked && (
<<<<<<< HEAD
            <nav className="lg:hidden bg-blue-400">{navigation()}</nav>
=======
            <nav class="lg:hidden bg-blue-400 p-4">{navigation("", "m-3")}</nav>
>>>>>>> 313e307c31f2dbfff67fc3fafe3eb48b0f7e38ba
          )}

          <div className="p-10">
            <Outlet />
          </div>
        </div>
      )}
    </>
  )
}

export default PrivateLayout
