import Header from "../components/Header";
import TaskForm from "./TaskForm";

function AddTask({ onSetPage, project, projects, onSetProjects }) {
    return (
        <>
            <Header />
            <div className="mx-100">
                <div className="d-flex justify-content-between align-items-center">
                    <h2>Project Detail</h2>
                    <button className="btn" onClick={() => onSetPage("home")}>Go Back</button>
                </div>
                {
                    <div style={{ "marginBottom": "10px" }}>
                        <div className="d-flex align-items-center" style={{ "gap": "8px", "marginBottom": "12px" }}>
                            <p style={{ "fontSize": "medium" }}>Project title: </p>
                            <h2 style={{ "fontSize": "20px", "margin": 0, "padding": 0 }}>{project.title}</h2>
                        </div>
                        {project.description ? (
                            <div className="d-flex align-items-start" style={{ "marginTop": "6px" }}>
                                <p className="text-nowrap" style={{ "fontSize": "medium", "margin": 0, "marginRight": "5px" }}>Project Description: </p>
                                <p className="text-justify" style={{ "fontSize": "18px", "margin": 0 }}>{project.description}</p>
                            </div>
                        ) : ""}
                    </div>
                }
                <TaskForm project={project} projects={projects} onSetProjects={onSetProjects} />
            </div >
        </>
    )
}

export default AddTask