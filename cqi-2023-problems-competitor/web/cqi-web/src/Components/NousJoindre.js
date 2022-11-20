import React from 'react';

const NousJoindre = () => {
  return (
    <div>
      <div>
        <h1 className='text-2xl'>Nos coordonées</h1>
        <p>Téléphone : 911</p>
        <p>Adresse postal : 4545 Pierre-de Coubertin Ave</p>
        <p>Adresse mail : oui@oui.com</p>
      </div>
      <div>
        <h1 className='text-2xl mt-10'>Nous contacter</h1>
        <form className=' w-1/2 b'>
          <label>Nom</label>
          <input
            type='text'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          />
          <label>Email</label>
          <input
            type='email'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          />
          <label>Téléphone</label>
          <input
            type='tel'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          />
          <label>Message</label>
          <input
            type='text'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          />
          <input
            type='submit'
            className='mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center '
          />
        </form>
      </div>
    </div>
  );
};

export default NousJoindre;
