import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PrivateLayout from './layouts/privateLayout/PrivateLayout'
import NotFound from './pages/NotFound'
import Potato from './pages/Potato'
import Login from './pages/Login'
import BasicLayout from './layouts/basicLayout/BasicLayout'
import { UserContext } from './contexts/userContext'
import { useEffect, useState } from 'react'
import { getUser } from './services/Login'
import Tasks from './pages/Tasks'
import Reports from './pages/Reports'
import UserCreation from './pages/UserCreation'
import Notifications from './pages/Notifications'
import Object from './pages/Object'
import CreateTask from './pages/CreateTask'

function App() {
  const [authenticated, setAuthenticated] = useState('')

  useEffect(() => {
    const authentication = async () => {
      if (!authenticated) {
        const auth = await getUser()
        setAuthenticated(auth)
      }
    }
    authentication()
  }, [])

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{ user: authenticated, setUser: setAuthenticated }}
      >
        <Routes>
          <Route path="/" element={<PrivateLayout />}>
            {/* <Route index element={<Home />} /> */}
            <Route path="potato" element={<Potato />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="reports" element={<Reports />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="userCreation" element={<UserCreation />} />
            <Route path="createTask" element={<CreateTask />} />
            <Route path="object" element={<Object />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/login" element={<BasicLayout />}>
            <Route path="" element={<Login />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
