import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PrivateLayout from './layouts/privateLayout/PrivateLayout'
import NotFound from './pages/NotFound'
import Potato from './pages/Potato'
import Login from './pages/Login'
import Notifications from './pages/Notifications'
import BasicLayout from './layouts/basicLayout/BasicLayout'
import { UserContext } from './contexts/userContext'
import { useEffect, useState } from 'react'
import { getUser } from './services/Login'
import Tasks from './pages/Tasks'
import Reports from './pages/Reports'

function App() {
  const [authenticated, setAuthenticated] = useState('')

  useEffect(() => {
    const authentication = async () => {
      if (!authenticated) {
        const auth = await getUser()
        setAuthenticated(auth)
      }
<<<<<<< HEAD
    }
    authenticated()
  }, [])
=======
    };
    authentication();
  }, []);
>>>>>>> 5b60d2b67a37d02d98cf0ee595e6f21d6c4cbe44

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
