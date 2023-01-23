import React, { useState } from 'react';

const Card = (props) => {
  const [buttonColor, setButtonColor] = useState(
    'bg-blue-500 hover:bg-blue-700'
  );
  const ajouterPanierHandler = () => {
    if (buttonColor === 'bg-blue-500 hover:bg-blue-700') {
      setButtonColor('bg-red-500 hover:bg-red-700');
    } else {
      setButtonColor('bg-blue-500 hover:bg-blue-700');
    }
    props.ajouterPanier(props.pack);
  };
  return (
    <div className='border m-5 hover:shadow-md'>
      <div className='flex gap-10'>
        <p className='text-xl font-bold'>{props.pack.display_name}</p>
        <p className='text-green-500'>{props.pack.price}$</p>
      </div>
      <p className=''>{props.pack.description_fr}</p>
      <div className='flex justify-center my-3'>
        <button
          className={
            buttonColor + 'text-white py-2 px-4 justify-center rounded'
          }
          onClick={ajouterPanierHandler}
        >
          {buttonColor === 'bg-blue-500 hover:bg-blue-700' ? (
            <p>Ajouter Au panier</p>
          ) : (
            <p>Retirer tout du panier</p>
          )}
        </button>
      </div>
    </div>
  );
};

export default Card;
