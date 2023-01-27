import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../../contexts/userContext'
import NavButton from './NavButton'

const PrivateLayout = () => {
  const user = useContext(UserContext)

  return (
    <>
      {!user ? (
        <Navigate to={{ pathname: '/login' }} />
      ) : (
        <div>
          <nav className="bg-blue-400 p-6">
            <ul className="flex row justify-around">
              {/* <NavButton to="/">Home</NavButton> */}
              {/* <NavButton to="/potato">Potato</NavButton> */}
              <NavButton to="/tasks">Mes taches</NavButton>
              <NavButton to="/reports">Rapports</NavButton>
              <NavButton to="/lostObj">Objets perdus</NavButton>
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
