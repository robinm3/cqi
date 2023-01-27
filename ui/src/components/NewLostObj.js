import React from 'react'

const NewLostObj = (props) => {
  const submitNewLostObjHandler = (e) => {
    props.onSubmit(e, 'lostObj')
  }

  return (
    <>
      <h2 id="newLostObj" className="text-2xl">
        Nouveau objet perdu
      </h2>
      <form onSubmit={submitNewLostObjHandler} className="my-10">
        <div className="flex flex-col gap-4">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nom"
            className="border-2 border-gray-300 p-2 rounded-md"
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            placeholder="Description"
            className="border-2 border-gray-300 p-2 rounded-md"
          ></textarea>
          <label htmlFor="time">Moment</label>
          <input
            type="datetime-local"
            name="time"
            id="time"
            className="border-2 border-gray-300 p-2 rounded-md"
          />
          <label htmlFor="contact">Contact</label>
          <input
            type="text"
            name="contact"
            id="contact"
            placeholder="Contact"
            className="border-2 border-gray-300 p-2 rounded-md"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Envoyer
          </button>
        </div>
      </form>
    </>
  )
}

export default NewLostObj
