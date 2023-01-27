import React from 'react'
import TaskCard from '../components/TaskCard'
import { getTasks } from '../services/TaskServices'

const Tasks = () => {
  // const tasks = getTasks()
  const tasks = [
    {
      name: 'Vider la poubelle',
      description: 'Dans le hall',
      startTime: 1674850852,
      endTime: 1674799852,
    },
    {
      name: 'Vider la poubelle2',
      description: 'Dans le hall2',
      startTime: 1674790852,
      endTime: 1674890852,
    },
  ]

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
    <div>
      <h1 className="text-3xl mb-10">Mes tâches</h1>
      <h2 className="text-2xl mb-5">
        Aujourd'hui ({new Date().getDate()} {monthNames[new Date().getMonth()]})
      </h2>
      {tasks
        .filter((task) => {
          return (
            new Date(task.startTime * 1000).getDate() == new Date().getDate()
          )
        })
        .map((task) => (
          <TaskCard task={task} key={task.name} withDate={false} />
        ))}
      <h2 className="text-2xl mb-5">Tous les tâches</h2>
      {tasks
        .filter((task) => {
          return new Date(task.startTime * 1000) > new Date()
        })
        .map((task) => (
          <TaskCard task={task} key={task.name} withDate={true} />
        ))}
    </div>
  )
}

export default Tasks
