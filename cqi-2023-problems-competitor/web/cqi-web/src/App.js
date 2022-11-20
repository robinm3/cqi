import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Billeterie from './Components/Billeterie';
import Programmation from './Components/Programmation';
import { InfosPratiques } from './Components/InfosPratiques';
import FAQ from './Components/FAQ';
import NousJoindre from './Components/NousJoindre';
import Home from './Components/Home';
import logo from './image/logo.jpeg';

function App() {
  return (
    <Router>
      <div>
        <div className='flex gap-[5rem] items-center justify-center text-2xl bg-blue-500 w-screen h-[5rem]'>
          <div>
            <Link to={'/'} className='no-underline'>
              <img src={logo} alt='logo' className=' w-[60px] mr-10' />
            </Link>
          </div>
          <div>
            <Link to={'/billeterie'} className='no-underline'>
              Billeterie
            </Link>
          </div>
          <div>
            <Link to={'/Programmation'} className='no-underline'>
              Programmation
            </Link>
          </div>
          <div>
            <Link to={'/InfosPratiques'} className='no-underline'>
              Infos pratiques
            </Link>
          </div>
          <div>
            <Link to={'/FAQ'} className='no-underline'>
              FAQ
            </Link>
          </div>
          <div>
            <Link to={'/NousJoindre'} className='no-underline'>
              Nous joindre
            </Link>
          </div>
        </div>
        <div className='m-5'>
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/billeterie' element={<Billeterie />} />
            <Route path='/Programmation' element={<Programmation />} />
            <Route path='/InfosPratiques' element={<InfosPratiques />} />
            <Route path='/FAQ' element={<FAQ />} />
            <Route path='/NousJoindre' element={<NousJoindre />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
