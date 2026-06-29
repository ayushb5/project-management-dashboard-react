import { useState } from "react"
import Home from "./pages/Home"
function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [page, setPage] = useState("home")
  return (
    <div class="container">
      {page === "home" && <Home />}
    </div>
  )
}

export default App