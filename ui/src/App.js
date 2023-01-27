import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
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
import LostObj from './pages/LostObj'

function App() {
  const [authenticated, setAuthenticated] = useState('')

  useEffect(() => {
    const authenticated = async () => {
      const auth = await getUser()
      setAuthenticated(auth)
    }
    authenticated()
  })

  return (
    <BrowserRouter>
      <UserContext.Provider value={authenticated}>
        <Routes>
          <Route path="/" element={<PrivateLayout />}>
            {/* <Route index element={<Home />} /> */}
            <Route path="potato" element={<Potato />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="reports" element={<Reports />} />
            <Route path="lostObj" element={<LostObj />} />
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
