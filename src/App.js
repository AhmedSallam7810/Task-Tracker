import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  const [showAdd, setShowAdd] = useState(true);

  useEffect(() => {
    const getTasks = async () => {
      let res = await fetch("http://localhost:5000/tasks");
      setTasks(await res.json());
    };
    getTasks();
  }, []);

  //add task
  const newTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  };

  //delete task
  const onDelete = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //taggle task
  const onTaggle = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    const uptask = { ...data, reminder: !data.reminder };

    const req = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(uptask),
    });

    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, reminder: uptask.reminder } : task;
      })
    );
  };

  return (
    <Router>
      <div className="container">
        <Header showAddSec={() => setShowAdd(!showAdd)} showAdd={showAdd} />

        <Routes>
          <Route
            path="/"
            element={
              <div>
                {showAdd && <AddTask newTask={newTask} />}
                <Tasks tasks={tasks} onDelete={onDelete} onTaggle={onTaggle} />
              </div>
            }
          />

          <Route path="/About" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
