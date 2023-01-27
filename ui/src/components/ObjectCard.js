import React from 'react'

const ObjectCard = ({ obj }) => {
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
        {new Date(obj.time * 1000).getHours()}:
        {new Date(obj.time * 1000).getMinutes()}
        {' - '}
        {new Date(obj.time * 1000).getDate()}{' '}
        {monthNames[new Date(obj.time * 1000).getMonth()]}{' '}
      </p>
    </div>
  )
}

export default ObjectCard
