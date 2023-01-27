import React from 'react'

const ObjectCard = ({ obj, found }) => {
  console.log(obj)
  let date = new Date()
  if (found) {
    date = new Date(obj.foundTime)
  } else {
    date = new Date(obj.lostTime)
  }

  const monthNames = [
    'janvier',
    'février',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'août',
    'septembre',
    'octobre',
    'novenbre',
    'décembre',
  ]
  return (
    <div className="rounded shadow p-5 m-5 ">
      <h3 className="font-bold">{obj.name}</h3>
      <p className="text-left">{obj.description}</p>
      <p className="text-left">
        {date.getHours()}:{date.getMinutes()}
        {' - '}
        {date.getDate()} {monthNames[date.getMonth()]}{' '}
      </p>
      {!found ? <p>{obj.email}</p> : null}
    </div>
  )
}

export default ObjectCard
