import { useEffect, useState } from "react";
import Header from "../components/Header"

function ProjectForm({ projects,
    selectedProject,
    onSetProjects,
    onSetSelectedProject,
    onSetPage }) {
    const [title, setTitle] = useState(selectedProject?.title || "");
    const [description, setDescription] = useState(selectedProject?.description || "");
    const [error, setError] = useState("");

    useEffect(() => {
        if (selectedProject) {
            setTitle(selectedProject.title);
            setDescription(selectedProject.description);
        } else {
            setTitle("");
            setDescription("");
        }
    }, [selectedProject]);

    const saveProject = () => {
        if (!title.trim()) {
            setError("Title is required");
            return;
        } else {
            setError("");
        }

        if (selectedProject) {
            const updatedProjects = projects.map((project) => (
                project.id === selectedProject.id ?
                    { ...project, title, description }
                    : project
            ));
            onSetProjects(updatedProjects)
            onSetSelectedProject(null);

            alert("Project Updated Successfully");
            onSetPage("home");
        } else {
            const newProject = {
                id: Date.now(),
                title: title,
                description: description,
                tasks: []
            }

            onSetProjects((prev) => [...prev, newProject])
            onSetSelectedProject(newProject);
            alert("Project Added Successfully");
            onSetPage("add-task");
        }

        setTitle("");
        setDescription("");
    }

    return (
        <>
            <Header />
            <div className="mx-100">
                <div className="d-flex justify-content-between align-items-center">
                    <h2>{selectedProject ? "Edit Project" : "Add Project"}</h2>
                    <button className="btn" onClick={() => {
                        onSetSelectedProject(null)
                        onSetPage("home")
                    }}>Go Back</button>
                </div>
                <input type="text"
                    className="grid"
                    name="projectTitle"
                    id="projectTitle"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter Project Title"
                    style={{ "marginBottom": "8px" }}
                />
                {error ? (<span className="text-red">{error}</span>) : ""}

                <textarea className="grid"
                    name="projectDescription"
                    id="projectDescription"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter Project Description"
                    rows={3}
                />

                <button className="btn btn-green"
                    style={{ "marginTop": "20px" }}
                    onClick={saveProject}
                >
                    {selectedProject ? "Update" : "Add"}
                </button>
            </div >
        </>
    )
}

export default ProjectForm