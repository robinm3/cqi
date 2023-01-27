import React, { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { getTasks } from "../services/Tasks";

const Tasks = () => {
  const [loading, setLoading] = React.useState(true);
  const [tasks, setTasks] = React.useState([]);

  useEffect(() => {
    const getTasksFromBackend = async () => {
      const tasks = await getTasks();

      setTasks(tasks);
      setLoading(false);
    };
    getTasksFromBackend();
  }, []);

  const monthNames = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novenbre",
    "décembre",
  ];

  if (loading) {
    return <div>Loading...</div>;
  }
  if (
    !tasks ||
    tasks.filter((task) => {
      return new Date(task.startTime).getDate() > new Date().getDate();
    }).length === 0
  ) {
    return <div>Vous n'avez aucune tâche</div>;
  }
  return (
    <div>
      <h2 className="text-2xl mb-5">Tous les tâches</h2>
      {tasks
        .filter((task) => {
          return new Date(task.startTime).getDate() > new Date().getDate();
        })
        .map((task) => (
          <TaskCard task={task} key={task.name} withDate={true} />
        ))}
    </div>
  );
};

export default Tasks;
