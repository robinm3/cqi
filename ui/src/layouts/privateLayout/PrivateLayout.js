import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import useUserContext from '../../contexts/useUserContext'
import { logout } from '../../services/Login'
import NavButton from './NavButton'

const PrivateLayout = () => {
  const navigate = useNavigate()
  const { user, setUser } = useUserContext()
  console.log(user)

  const handleLogout = async () => {
    if (user) {
      await logout()
      navigate('/login')
      setUser('')
    }
  }

  return (
    <>
      {!user ? (
        <Navigate to={{ pathname: '/login' }} />
      ) : (
        <div>
          <nav className="bg-blue-400 p-6 flex justify-between ">
            <ul className="flex justify-around align-middle">
              <NavButton to="/tasks">Mes tâches</NavButton>
              <NavButton to="/reports">Rapports</NavButton>
              {user.type === "Organisateur" && (
                <NavButton to="/userCreation">Création d'utilisateur</NavButton>
              )}
            </ul>
            <ul className="flex justify-around">
              <NavButton to="/notifications">
                {/* <svg
                  src={require('../../icons/bell.png')}
                  className="w-7 h-7"
                  alt="bell"
                /> */}
                Notifications
              </NavButton>
              <button onClick={handleLogout}>Logout</button>
            </ul>
          </nav>

          <div className="p-10">
            <Outlet />
          </div>
        </div>
      )}
    </>
  )
}

export default PrivateLayout
