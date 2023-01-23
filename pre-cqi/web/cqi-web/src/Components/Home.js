import React from 'react';
import logo from '../image/logo.jpeg';
import Countdown from 'react-countdown';

const Home = () => {
  return (
    <div className='w-screen'>
      <div className='fixed -z-10 translate-x-[1000px]'>
        <img src={logo} alt='logo' className='w-[800px]' />
      </div>
      <h1 className='text-8xl mb-2'>Potato Cloud Fest</h1>
      <h1 className='text-5xl'>Où</h1>
      <p className='mb-5 mt-2'>
        Cette année, le fabuleu festival se trouve à MONTRÉAL!
      </p>
      <h1 className='text-5xl'>Quand</h1>
      <p className='mb-5 mt-2'>Du 26 au 27 janvier</p>

      <div className=' translate-y-[200px]'>
        <p className='text-4xl'>
          Êtes-vous prêt ? Le{' '}
          <span className=' text-blue-500 font-bold'>festival</span> commence
          dans
        </p>
        <Countdown
          className='text-[10rem] text-blue-500 animate-pulse '
          date={Date.now() + (new Date('2023-01-26').getTime() - Date.now())}
        />
      </div>
    </div>
  );
};

export default Home;
