import React from 'react'
import TaskAdminCard from '../components/TaskAdminCard'

const CreateTask = () => {
  // const taches = getTaches()
  const taches = [
    {
      name: 'yes',
      description: 'desc',
      startTime: 1676790852,
      endTime: 1674890852,
      volonteerId: 2,
      taskId: '1',
    },
    {
      name: 'yesnon',
      description: 'desc',
      startTime: 1675790852,
      endTime: 1674899852,
      volonteerId: 1,
      taskId: '2',
    },
    {
      name: 'yesere',
      description: 'desc',
      startTime: 1674790852,
      endTime: 1654890852,
      volonteerId: 1,
      taskId: '3',
    },
  ]

  const supprimerHandler = (taskId) => {
    //call api pour Delete
    taches = taches.filter((tache) => tache.taskId !== taskId)
    //ou bien recall le service.
  }

  return (
    <div>
      <h2 className="text-2xl">Tâches</h2>
      <div>
        <ul className="flex flex-col gap-5 mt-8">
          {taches.map((tache) => (
            <TaskAdminCard
              tache={tache}
              key={tache._id}
              supprimerHandler={supprimerHandler}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CreateTask
