import { useState, useEffect } from "react";
import TaskCard from "./components/TaskCard";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Finish React Assignment",
      category: "Web Development",
    },
    {
      id: 2,
      title: "Prepare Database Notes",
      category: "Database",
    },
    {
      id: 3,
      title: "Practice JavaScript Questions",
      category: "Programming",
    },
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;

    const task = {
      id: tasks.length + 1,
      title: newTask,
      category: "General",
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  useEffect(() => {
    console.log("Task list updated!");
    console.log("Total number of tasks:", tasks.length);
  }, [tasks]);

  return (
    <div className="app">
      <header className="header">
        <div>
          <p className="small-heading">STUDENT SPACE</p>

          <h1>Campus Task Board</h1>

          <p className="subtitle">
            Keep your university tasks organized in one place.
          </p>
        </div>

        <div className="task-count">
          <span>{tasks.length}</span>
          <small>Tasks</small>
        </div>
      </header>

      <main className="board">
        <div className="board-title">
          <h2>My Tasks</h2>
          <span>Semester Planner</span>
        </div>
        <div className="add-task">
          <input
            type="text"
            placeholder="Enter a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />

          <button onClick={addTask}>
            Add Task
          </button>
        </div>

        <div className="task-list">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </main>

      <footer>
        Campus Task Board • Built with React
      </footer>
    </div>
  );
}

export default App;