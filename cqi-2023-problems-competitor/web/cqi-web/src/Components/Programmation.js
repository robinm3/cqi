import React from 'react';

const Programmation = () => {
  const data = [
    {
      nom: 'Création de gnocchi en forme de nuage',
      location: 'Atrium Cirrus',
      date: '2023-01-26',
      start: '12PM',
      end: '1PM',
      type: 'Workshop',
    },
    {
      nom: 'Jazz nuageux',
      location: 'Nimbostratus Theatre',
      date: '2023-01-27',
      start: '8PM',
      end: '10PM',
      type: 'Show',
    },
    {
      nom: 'Crisp ou chip: Quel nom a le plus rapport? ',
      location: 'Stratus Room',
      date: '2023-01-27',
      start: '2PM',
      end: '3:30PM',
      type: 'Discussion Panel',
    },
    {
      nom: 'Comment prendre des meilleures photos de nuage',
      location: 'Stratus Room',
      date: '2023-01-27',
      start: '12PM',
      end: '1PM',
      type: 'Workshop',
    },
    {
      nom: 'Observation des nuages en fin d’après-midi',
      location: 'Atrium Cirrus',
      date: '2023-01-26',
      start: '3:30PM',
      end: '5PM',
      type: 'Workshop',
    },
    {
      nom: 'Fais tes propres patates déjeuner',
      location: 'Atrium Cirrus',
      date: '2023-01-27',
      start: '9AM',
      end: '10AM',
      type: 'Workshop',
    },
    {
      nom: 'Monsieur et Mme Patate',
      location: 'Cumulus Stage',
      date: '2023-01-27',
      start: '4PM',
      end: '6PM',
      type: 'Show',
    },
    {
      nom: 'La troupe de danse Potato Skins',
      location: 'Nimbostratus Theatre',
      date: '2023-01-26',
      start: '8PM',
      end: '9:30PM',
      type: 'show',
    },
    {
      nom: 'Étampes en patate pour toute la famille',
      location: 'Stratus Room',
      date: '2023-01-26',
      start: '4PM',
      end: '9:30PM',
      type: 'Show',
    },
    {
      nom: 'Innovation récentes dans les outils à patates pilées',
      location: 'Cumulus Stage',
      date: '2023-01-26',
      start: '10PM',
      end: '5:30PM',
      type: 'Workshop',
    },
    {
      nom: 'Patates douces: overrated?',
      location: 'Atrium Cirrus',
      date: '2023-01-26',
      start: '2PM',
      end: '11:30PM',
      type: 'Show',
    },
    {
      nom: 'La meilleure forme de nuage en 2023',
      location: 'Stratus Room',
      date: '2023-01-26',
      start: '1:30PM',
      end: '3PM',
      type: 'Discussion Panel',
    },
    {
      nom: 'The Hash Brown Band',
      location: 'Stratus Room',
      date: '2023-01-27',
      start: '4PM',
      end: '2:30PM',
      type: 'Show',
    },
    {
      nom: 'L’opéra Yukon Gold',
      location: 'Cumulus Stage',
      date: '2023-01-27',
      start: '7PM',
      end: '5PM',
      type: 'Show',
    },
  ];

  return (
    <div className='flex w-screen justify-around pr-5'>
      <div>
        <h1 className='text-xl font-bold'>Discussion Panel</h1>
        {data
          .filter((item) => {
            return item.type === 'Discussion Panel';
          })
          .map((item) => {
            return (
              <div
                key={item.nom}
                className='border mb-2 hover:bg-blue-100 hover:shadow-md p-2'
              >
                <p className='font-semibold'>{item.nom}</p>
                <p>
                  Commence à {item.start} et fini à {item.end}
                </p>
                <p className='text-sm text-blue-500'>{item.location}</p>
              </div>
            );
          })}
      </div>
      <div>
        <h1 className='text-xl font-bold'>Show</h1>
        {data
          .filter((item) => {
            return item.type === 'Show';
          })
          .map((item) => {
            return (
              <div
                key={item.nom}
                className='border mb-2 hover:bg-blue-100 hover:shadow-md p-2'
              >
                <p className='font-semibold'>{item.nom}</p>
                <p>
                  Commence à {item.start} et fini à {item.end}
                </p>
                <p className='text-sm text-blue-500'>{item.location}</p>
              </div>
            );
          })}
      </div>
      <div>
        <h1 className='text-xl font-bold'>Workshop</h1>
        {data
          .filter((item) => {
            return item.type === 'Workshop';
          })
          .map((item) => {
            return (
              <div
                key={item.nom}
                className='border mb-2 hover:bg-blue-100 hover:shadow-md p-2'
              >
                <p className='font-semibold'>{item.nom}</p>
                <p className='text-sm text-blue-500'>
                  Commence à {item.start} et fini à {item.end}
                </p>
                <p>{item.location}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Programmation;
