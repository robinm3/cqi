import React from 'react'

const NewProblem = (props) => {
  const submitHandler = (e) => {
    e.preventDefault()
    props.onSubmit(e, 'problem')
  }
  return (
    <>
      <h2 id="newReport" className="text-2xl">
        Nouveau rapport
      </h2>
      <form onSubmit={submitHandler} className="my-10">
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
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="type"
            className="border-2 border-gray-300 p-2 rounded-md"
          >
            <option value="organisateur">Organisateur</option>
            <option value="benevole">Bénévole</option>
            <option value="securite">Sécurité</option>
            <option value="premier soin"> Premier Soins</option>
          </select>
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

export default NewProblem
