import React from 'react'
import ObjectCard from '../components/ObjectCard'

const Object = () => {
  // const objectFound = getFoundObj()
  // const objectLost = getLostObj()
  const objectFound = [
    { name: 'test1', description: 'description1', time: 1674799812 },
    { name: 'test2', description: 'description2', time: 1674797822 },
    { name: 'test3', description: 'description3', time: 1664799832 },
    { name: 'test4', description: 'description4', time: 1674799842 },
    { name: 'test5', description: 'description5', time: 1674699852 },
    { name: 'test6', description: 'description6', time: 1674799862 },
  ]

  const objectLost = [
    {
      name: 'test1',
      description: 'description1',
      time: 1674799812,
      email: 'sa@gre.com',
    },
    {
      name: 'test1',
      description: 'description1',
      time: 1674799822,
      email: 'sa@gre.com',
    },
    {
      name: 'test1',
      description: 'description1',
      time: 1674799832,
      email: 'sa@gre.com',
    },
    {
      name: 'test1',
      description: 'description1',
      time: 1674799842,
      email: 'sa@gre.com',
    },
    {
      name: 'test1',
      description: 'description1',
      time: 1674799852,
      email: 'sa@gre.com',
    },
  ]
  return (
    <div className="md:flex justify-around">
      <div className="basis-1/2 text-center">
        <h2 className="text-2xl">Objets trouvés</h2>
        <div className="flex flex-col gap-4 mt-4">
          {objectFound.map((obj) => (
            <ObjectCard obj={obj} key={obj.time} />
          ))}
        </div>
      </div>
      <div className="basis-1/2 text-center">
        <h2 className="text-2xl">Objets perdus</h2>
        <div className="flex flex-col gap-4 mt-4">
          {objectLost.map((obj) => (
            <ObjectCard obj={obj} key={obj.time} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Object
