import { useState } from "react"
import Header from "../components/Header"

function AddProject({ onSetPage, onSetProjects, onSetSelectedProject }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    const saveProject = () => {
        if (!title.trim()) {
            setError("Title is required");
            return;
        } else {
            setError("");
        }

        const newProject = {
            id: Date.now(),
            title: title,
            description: description,
            tasks: []
        }

        onSetProjects((prev) => [...prev, newProject])

        setTitle("");
        setDescription("");
        onSetSelectedProject(newProject);
        alert("Project Added Successfully");
        onSetPage("add-task");
    }

    return (
        <>
            <Header />
            <div className="mx-100">
                <div className="d-flex justify-content-between align-items-center">
                    <h2>Add Project</h2>
                    <button className="btn" onClick={() => onSetPage("home")}>Go Back</button>
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
                    Add
                </button>
            </div >
        </>
    )
}

export default AddProject