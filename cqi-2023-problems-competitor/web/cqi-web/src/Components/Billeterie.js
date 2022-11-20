import React, { useState } from 'react';
import ListAchat from './ListAchat';
import Magasin from './Magasin';
import tickets from '../data/tickets.json';

const Billeterie = () => {
  const [panier, setPanier] = useState([]);
  const ajouterPanierHandler = (packJson) => {
    if (panier.includes(packJson)) {
      setPanier(
        panier.filter((p) => {
          return p !== packJson;
        })
      );
    } else {
      setPanier(panier.concat([packJson]));
    }
  };

  return (
    <div className='flex '>
      <Magasin
        tickets={tickets.packages}
        ajouterPanier={ajouterPanierHandler}
      />
      <ListAchat panier={panier} />
    </div>
  );
};

export default Billeterie;
