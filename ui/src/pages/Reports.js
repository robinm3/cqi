import React, { useState } from 'react'
import NewProblem from '../components/NewProblem'
import NewLostObj from '../components/NewLostObj'
import NewFoundObj from '../components/NewFoundObj'

const Reports = () => {
  const submitHandler = (values, type) => {
    if (type === 'problem') {
      const [name, description, type] = values
      //api
    } else if (type === 'lostObj') {
      const [name, description, date, contact] = values
      //api
    } else if (type === 'foundObj') {
      const [name, description, date] = values
      //api
    }
  }
  const [currentForm, setCurrentForm] = useState(
    <NewProblem onSubmit={submitHandler} />
  )
  const problemeClickHandler = () => {
    setCurrentForm(<NewProblem onSubmit={submitHandler} />)
  }
  const lostObjClickHandler = () => {
    setCurrentForm(<NewLostObj onSubmit={submitHandler} />)
  }
  const foundObjClickHandler = () => {
    setCurrentForm(<NewFoundObj onSubmit={submitHandler} />)
  }

  return (
    <div>
      <div className="md:flex justify-center gap-14 text-gray-500 mb-10">
        <p
          className="cursor-pointer select-none"
          onClick={problemeClickHandler}
        >
          Nouveau problème
        </p>
        <p className="cursor-pointer select-none" onClick={lostObjClickHandler}>
          Nouveau objet perdu
        </p>
        <p
          className="cursor-pointer select-none"
          onClick={foundObjClickHandler}
        >
          Nouveau objet trouvé
        </p>
      </div>
      {currentForm}
    </div>
  )
}

export default Reports
