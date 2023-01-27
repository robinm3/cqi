import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import useUserContext from '../../contexts/useUserContext'
import { logout } from '../../services/Login'
import NavButton from './NavButton'

const PrivateLayout = () => {
<<<<<<< HEAD
  const navigate = useNavigate()
  const { user, setUser } = useUserContext()
  console.log(user)
=======
  const navigate = useNavigate();
  const { user, setUser } = useUserContext();
>>>>>>> 5b60d2b67a37d02d98cf0ee595e6f21d6c4cbe44

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
          <nav className="bg-blue-400 p-6 flex row justify-between ">
            <ul className="flex row justify-around">
              <NavButton to="/tasks">Mes tâches</NavButton>
              <NavButton to="/reports">Rapports</NavButton>
<<<<<<< HEAD
              <NavButton to="/notifications">Notifications</NavButton>
=======
            </ul>
            <ul className="flex row justify-around">
>>>>>>> 5b60d2b67a37d02d98cf0ee595e6f21d6c4cbe44
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
