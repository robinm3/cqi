import React, { useState } from 'react';

const Section = (props) => {
  const [open, setOpen] = useState(false);
  const changeOpenHandler = () => {
    setOpen(!open);
  };

  return (
    <div className='mt-5'>
      <h1
        className='text-4xl cursor-pointer select-none'
        onClick={changeOpenHandler}
      >
        {props.title}
      </h1>
      {open ? (
        <div className='mb-2 flex-col text-lg'>
          <p>Oui ? non. </p>
          <p>Oui ? non. </p>
          <p>Oui ? non. </p>
          <p>Oui ? non. </p>
        </div>
      ) : (
        <div className='text-xs'>Cliquer pour ouvrir</div>
      )}
    </div>
  );
};

export default Section;
