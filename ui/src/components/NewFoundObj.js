import React, { useState } from 'react'

const NewFoundObj = (props) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const submitNewLostObjHandler = (e) => {
    if (name && description && date) {
      e.preventDefault()
      props.onSubmit(
        [name, description, new Date(date).getTime() / 1000],
        'foundObj'
      )
      setName('')
      setDescription('')
      setDate('')
    }
  }

  return (
    <>
      <h2 id="newLostObj" className="text-2xl">
        Nouveau objet trouvé
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
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            placeholder="Description"
            className="border-2 border-gray-300 p-2 rounded-md"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value)
            }}
          ></textarea>
          <label htmlFor="time">Moment</label>
          <input
            type="datetime-local"
            name="time"
            id="time"
            className="border-2 border-gray-300 p-2 rounded-md"
            value={date}
            onChange={(e) => {
              setDate(e.target.value)
            }}
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

export default NewFoundObj
