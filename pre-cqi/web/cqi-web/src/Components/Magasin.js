import React from 'react';
import Card from './Card';

const Magasin = (props) => {
  const ajouterPanier = (pack) => {
    props.ajouterPanier(pack);
  };

  return (
    <div className='basis-2/3'>
      <div className='text-center mt-5 text-xl'>Faites votre magasinages!</div>
      {Object.values(props.tickets).map((pack) => {
        return (
          <Card
            key={pack.display_name}
            pack={pack}
            ajouterPanier={ajouterPanier}
          />
        );
      })}
    </div>
  );
};

export default Magasin;
