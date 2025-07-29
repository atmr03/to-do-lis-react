import { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTasks = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updateTasks = tasks.filter((_, i) => i !== index);
    setTasks(updateTasks);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index - 1]] = [
        updateTasks[index - 1],
        updateTasks[index],
      ];
      setTasks(updateTasks);
    }
  };

  const moveTaksDown = (index) => {
    if (index < tasks.length - 1) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index + 1]] = [
        updateTasks[index + 1],
        updateTasks[index],
      ];
      setTasks(updateTasks);
    }
  };

  return (
    <div className="flex justify-center mx-auto h-screen flex-col items-center">
      <h1 className="text-7xl mb-8 font-bold">Todo List App</h1>
      <div>
        <input
          className="p-2 rounded w-96 mb-4 font-bold"
          type="text"
          placeholder="Enter your text"
          value={newTask}
          onChange={handleInputChange}
        />

        <button
          className="bg-blue-600 p-2 rounded text-white mb-4 mx-2"
          onClick={addTasks}
        >
          Add
        </button>
      </div>
      <ol className="bg-slate-600 p-4 rounded flex flex-col items-center justify-center text-center">
        {tasks.map((task, index) => (
          <li
            className=" bg-blue-600 p-4 rounded flex justify-between items-center mb-4 pb-2"
            key={index}
          >
            <span className="text-2xl text-white">{task}</span>
            <button
              className="text-black-400 font-bold bg-red-500 p-2 rounded mx-2"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
            <button
              className="text-black-400 font-bold bg-red-500 p-2 rounded mx-2"
              onClick={() => moveTaskUp(index)}
            >
              👆
            </button>
            <button
              className="text-black-400 font-bold bg-red-500 p-2 rounded mx-2"
              onClick={() => moveTaksDown(index)}
            >
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
