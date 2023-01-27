import React, { useState } from "react";

const TaskAdminCard = ({ tache, supprimerHandler }) => {
  const [open, setOpen] = useState(false);
  const clickHandler = () => {};

  const suprimerHandler = async () => {
    await supprimerHandler(tache._id["$oid"]);
  };

  const startTime = new Date(tache.startTime * 1000);
  const endTime = new Date(tache.endTime * 1000);
  return (
    <div className="border shadow rounded p-2" onClick={clickHandler}>
      <div className="flex justify-between">
        <p>Bénévole ID: {tache.volonteerId}</p>
        <h3 className="font-bold text-center">{tache.name}</h3>
        <button
          className="bg-red-500 text-white p-2 rounded-md w-[90px]"
          onClick={suprimerHandler}
        >
          Supprimer
        </button>
      </div>
      {open ? (
        <div className="flex justify-between">
          <p>
            De {startTime.getHours()}:{startTime.getMinutes()} à{" "}
            {endTime.getHours()}:{endTime.getMinutes()}
          </p>
          <p>{tache.description}</p>

          <button className="bg-blue-500 text-white p-2 rounded-md w-[90px]">
            Modifier
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default TaskAdminCard;

{
  /* <h3>{tache.name}</h3>
      <p>{tache.description}</p>
      <p>{tache.startTime}</p>
      <p>{tache.endTime}</p>
      <p>{tache.volonteerId}</p>
      
      <button className="bg-red-500 text-white p-2 rounded-md">
        Supprimer
      </button> */
}
