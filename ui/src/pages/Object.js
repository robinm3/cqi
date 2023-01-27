import React, { useEffect } from 'react'
import ObjectCard from '../components/ObjectCard'
import { getFoundItem, getLostItem } from '../services/Objets'

const Object = () => {
  const [foundItem, setFoundItem] = React.useState([])
  const [lostItem, setLostItem] = React.useState([])

  useEffect(() => {
    const getFoundObj = async () => {
      const item = await getFoundItem()
      setFoundItem(item)
    }

    const getLostObj = async () => {
      const item = await getLostItem()
      setLostItem(item)
    }
    getLostObj()
    getFoundObj()
  }, [])

  return (
    <div className="md:flex justify-around">
      <div className="basis-1/2 text-center">
        <h2 className="text-2xl">Objets trouvés</h2>
        <div className="flex flex-col gap-4 mt-4">
          {foundItem.map((obj) => (
            <ObjectCard obj={obj} key={obj.foundTime} found={true} />
          ))}
        </div>
      </div>
      <div className="basis-1/2 text-center">
        <h2 className="text-2xl">Objets perdus</h2>
        <div className="flex flex-col gap-4 mt-4">
          {lostItem.map((obj) => (
            <ObjectCard obj={obj} key={obj.lostTime} found={false} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Object
