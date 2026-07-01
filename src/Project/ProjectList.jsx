function ProjectList({ onSetPage, projects, onSetProjects, onSetSelectedProject }) {
    const handleDelete = (projectId) => {
        const updatedProjects = projects.filter((project) => project.id !== projectId);
        onSetProjects(updatedProjects);
        onSetSelectedProject(null);
        alert("Project deleted successfully.");
    }
    return (
        <>
            <div className="mx-100 d-flex justify-content-between align-items-center">
                <h2>Projects</h2>
                <button className="btn btn-green" onClick={() => {
                    onSetSelectedProject(null);
                    onSetPage("add-project");
                }}>+ New Project</button>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="text-center">No Projects Added</td>
                            </tr>
                        ) : (
                            projects.map((project, index) => (
                                <tr key={project.id}>
                                    <td>{index + 1}</td>
                                    <td className="text-nowrap">{project.title}</td>
                                    <td className="description">{project.description}</td>
                                    <td>
                                        <div className="d-flex justify-content-center" style={{ gap: "10px" }}>
                                            <button className="btn-small" onClick={() => {
                                                onSetSelectedProject(project);
                                                onSetPage("add-task");
                                            }}>View</button>
                                            <button className="btn-small" onClick={() => {
                                                onSetSelectedProject(project);
                                                onSetPage("add-project");
                                            }}>Edit</button>
                                            <button className="btn-small" onClick={() => {
                                                if (window.confirm("Are you sure, you want to delete this project?")) {
                                                    handleDelete(project.id);
                                                } else {
                                                    return;
                                                }
                                            }}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div >
        </>
    )
}

export default ProjectList