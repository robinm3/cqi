import React from 'react';

const ListAchat = (props) => {
  // const []
  const total = (items) => {
    let total = 0;
    items.forEach((i) => {
      total += +i.price;
    });
    return total;
  };

  // const ajouterPlusOne = (e) => {
  //   console.log(e.target.id);
  // };

  return (
    <div className='basis-1/3'>
      <div className='text-center text-xl mt-5'>Votre panier</div>
      {props.panier.length === 0 ? (
        <div className='text-center '>Vide</div>
      ) : (
        <div className='mt-5'>
          <ul>
            {props.panier.map((item) => {
              return (
                <li key={item.display_name} className='mb-2'>
                  {/* <button className='mr-2 px-2 border' onClick={ajouterPlusOne}>
                    +1
                  </button> */}
                  {item.display_name}{' '}
                  <span className='text-green-500'>{item.price}$</span>
                </li>
              );
            })}
          </ul>
          <div className='mt-10'>
            Total :{' '}
            <span className='text-green-500'>{total(props.panier)}$</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListAchat;
