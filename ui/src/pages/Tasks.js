import React, { useEffect } from 'react'
import TaskCard from '../components/TaskCard'
import { getTasks } from '../services/Tasks'
import Calendar from 'react-awesome-calendar'

const Tasks = () => {
  const [loading, setLoading] = React.useState(true)
  const [tasks, setTasks] = React.useState([])
  const [useCalendar, setUseCalendar] = React.useState(false)

  useEffect(() => {
    const getTasksFromBackend = async () => {
      const tasks = await getTasks()

      setTasks(tasks)
      setLoading(false)
    }
    getTasksFromBackend()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }
  if (!tasks || tasks.length === 0) {
    return <div>Vous n'avez aucune tâche</div>
  }
  return (
    <div>
      <div className="flex row space-between justify-center">
        <h2 className="text-2xl mb-5">Tous les tâches</h2>
        <h4 className="pl-9 m-2">Calendar View:</h4>
        <div className="flex justify-center m-2">
          <div className=" items-center">
            <div className="relative inline-block h-4 w-8 cursor-pointer rounded-full">
              <input
                defaultChecked={true}
                id="switch-component"
                type="checkbox"
                className="peer absolute h-4 w-8 cursor-pointer rounded-full bg-blue-gray-300 transition-colors duration-300 checked:bg-pink-500 peer-checked:border-pink-500 peer-checked:before:bg-pink-500"
                onChange={() => setUseCalendar(!useCalendar)}
              />
              <label
                htmlFor="switch-component"
                className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-pink-500 peer-checked:before:bg-pink-500"
              >
                <div
                  className="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
                  data-ripple-dark="true"
                ></div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {useCalendar ? (
        tasks.map((task) => (
          <TaskCard task={task} key={task.name} withDate={true} />
        ))
      ) : (
        <Calendar
          events={tasks.map((task) => {
            return {
              title:
                'Du ' +
                new Date(task.startTime).toLocaleDateString() +
                ' au ' +
                new Date(task.endTime).toLocaleDateString() +
                ': ' +
                task.name +
                ' -> ' +
                task.description,
              from: new Date(task.startTime),
              to: new Date(task.endTime),
              color: '#3694DF',
            }
          })}
          mode="dailyMode"
        />
      )}
    </div>
  )
}

export default Tasks
