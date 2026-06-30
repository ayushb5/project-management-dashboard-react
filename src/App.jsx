import { useEffect, useState } from "react"
import Home from "./pages/Home"
import AddProject from "./Project/AddProject";
import AddTask from "./task/AddTask";
function App() {
  const [projects, setProjects] = useState(() => {
    const savedProjects = JSON.parse(localStorage.getItem("projects"));
    return savedProjects ? savedProjects : [];
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [page, setPage] = useState("home")

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  return (
    <div className="container">
      {page === "home" && <Home onSetPage={setPage} projects={projects} onSetSelectedProject={setSelectedProject} />}
      {page === "add-project" && <AddProject onSetPage={setPage} onSetProjects={setProjects} onSetSelectedProject={setSelectedProject} />}
      {page === "add-task" && <AddTask onSetPage={setPage} project={selectedProject} projects={projects} onSetProjects={setProjects} onSetSelectedProject={setSelectedProject} />}
    </div>
  )
}

export default App