import { useEffect, useState } from "react"
import Home from "./pages/Home"
import AddTask from "./task/AddTask";
import ProjectForm from "./Project/ProjectForm";
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
      {page === "home" && <Home onSetPage={setPage} projects={projects} onSetProjects={setProjects} onSetSelectedProject={setSelectedProject} />}
      {page === "add-project" && <ProjectForm projects={projects} onSetPage={setPage} onSetProjects={setProjects} selectedProject={selectedProject} onSetSelectedProject={setSelectedProject} />}
      {page === "add-task" && <AddTask onSetPage={setPage} project={selectedProject} projects={projects} onSetProjects={setProjects} onSetSelectedProject={setSelectedProject} />}
    </div>
  )
}

export default App