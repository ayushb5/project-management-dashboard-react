import AddProject from "./AddProject"

function ProjectList() {
    return (
        <>
            <hr />
            <div className="mx-100 d-flex justify-content-between align-items-center">
                <h2>Projects</h2>
                <button class="btn btn-green">+ New Project</button>
            </div>
            <AddProject />

        </>
    )
}

export default ProjectList