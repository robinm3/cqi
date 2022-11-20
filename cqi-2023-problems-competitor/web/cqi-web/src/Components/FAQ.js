import React from 'react';
import Section from './Section';
import { Link } from 'react-router-dom';

const FAQ = () => {
  return (
    <div className=' text-center'>
      <Section
        title='Object permis/interdits'
        questions={['Apporter des patates?', 'Apporter chips ?']}
        reponses={['non', 'oui']}
      ></Section>
      <Section
        title='Accès au site'
        questions={['Eau ?', 'toilette ?']}
        reponses={['non', 'oui']}
      ></Section>
      <Section
        title='Vente et livraison des billets'
        questions={['Trop tard ?', 'Trop tot?']}
        reponses={['non', 'surement']}
      ></Section>
      <div className='mt-10'>
        <Link
          to={'/NousJoindre'}
          className='no-underline text-blue-500 text-3xl'
        >
          Nous joindre
        </Link>
      </div>
    </div>
  );
};

export default FAQ;
