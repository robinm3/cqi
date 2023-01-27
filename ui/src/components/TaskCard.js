import React, { useState } from 'react'

const TaskCard = ({ task }) => {
  const startTime = new Date(task.startTime * 1000)
  const endTime = new Date(task.endTime * 1000)

  const [open, setOpen] = useState(false)

  const clickHandler = () => {
    setOpen(!open)
  }

  return (
    <div
      className="shadow-md rounded py-3 px-5  select-none border mb-3 "
      onClick={clickHandler}
    >
      <div className="flex ">
        <div className="font-bold"> {task.name}</div>
        <div className="ml-10">
          De {startTime.getHours()}:{startTime.getMinutes()} à{' '}
          {endTime.getHours()}:{endTime.getMinutes()}.
        </div>
      </div>
      {open ? <p className="mt-3 text-sm">{task.description}</p> : null}
    </div>
  )
}

export default TaskCard
