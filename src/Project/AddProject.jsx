function AddProject() {
    return (
        <div className="mx-100">
            <div class="d-flex justify-content-between align-items-center">
                <h2>Add Project</h2>
                <button class="btn">Go Back</button>
            </div>
            <input name="projectTitle" id="projectTitle" type="text" class="grid" placeholder="Enter Project Title" />
            <textarea name="projectDescription" id="projectDescription" class="grid" placeholder="Enter Project Description" rows={3}></textarea>
            <button class="btn btn-green" style={{ "margin-top": "20px" }}>Add</button>
        </div>
    )
}

export default AddProject