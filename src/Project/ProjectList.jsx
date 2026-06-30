function ProjectList({ onSetPage, projects, onSetSelectedProject }) {

    return (
        <>
            <div className="mx-100 d-flex justify-content-between align-items-center">
                <h2>Projects</h2>
                <button className="btn btn-green" onClick={() => onSetPage("add-project")}>+ New Project</button>
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
                                            <button className="btn-small">Edit</button>
                                            <button className="btn-small">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ProjectList