import React, { useEffect } from "react";
import TaskAdminCard from "../components/TaskAdminCard";
import { createTask, deleteTask, getTasks, getUsers } from "../services/Tasks";

const CreateTask = () => {
  const [loading, setLoading] = React.useState(true);
  const [tasks, setTasks] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [selectedUserId, setselectedUserId] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [startTime, setStartTime] = React.useState(13244);
  const [endTime, setEndTime] = React.useState(9030);

  useEffect(() => {
    const getTasksFromBackend = async () => {
      const tasks = await getTasks();

      setTasks(tasks);
      setLoading(false);
    };

    const getUsersFromBackend = async () => {
      const users = await getUsers();
      setUsers(users);
    };

    getTasksFromBackend();
    getUsersFromBackend();
  }, []);

  const supprimerHandler = async (taskId) => {
    if (taskId) {
      await deleteTask(taskId);
      const tasks = await getTasks();

      setTasks(tasks);
    }
  };

  const onChangeUser = (e) => {
    const user_id = e.target.value;
    setselectedUserId(user_id);
  };

  const onChangeStartTime = (e) => {
    const startTime = e.target.value;
    setStartTime(startTime);
  };
  const onChangeEndTime = (e) => {
    const endTime = e.target.value;
    setEndTime(endTime);
  };

  const handleCreateTask = async () => {
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const userId = selectedUserId || users[0].id;

    const task = {
      name,
      description,
      startTime: startTime || new Date().toDateString(),
      endTime: endTime || new Date().toDateString(),
      userId,
    };
    try {
      await createTask(task);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
  };

  return (
    <div>
      <h2 className="text-2xl">Créer une tâche</h2>
      <div className="flex flex-col gap-5 mt-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            name="name"
            id="name"
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="startTime">Date de début</label>
          <input
            type="datetime-local"
            name="startTime"
            id="startTime"
            onChange={onChangeStartTime}
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="endTime">Date de fin</label>
          <input
            type="datetime-local"
            name="endTime"
            id="endTime"
            onChange={onChangeEndTime}
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="userId">Utilisateur</label>
          <select
            className="border-2 border-gray-300 p-3 rounded-md"
            onChange={onChangeUser}
          >
            {users?.map((user) => (
              <option value={user.id}>
                {user.firstName + " " + user.lastName}
              </option>
            ))}
          </select>
        </div>
        <button
          className="bg-blue-500 text-white rounded-md p-2 mb-7"
          onClick={handleCreateTask}
        >
          Créer la tâche
        </button>
        {success && <div>Tâche créée avec succès</div>}
      </div>
      <h2 className="text-2xl">Tâches présentes</h2>
      <div>
        <ul className="flex flex-col gap-5 mt-8">
          {tasks.map((tache) => (
            <TaskAdminCard
              tache={tache}
              key={tache._id}
              supprimerHandler={supprimerHandler}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreateTask;
