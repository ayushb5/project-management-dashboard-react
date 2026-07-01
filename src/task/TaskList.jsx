function TaskList({ tasks, allTasks, onEditTask, onDeleteTask, onFilterStatus, onSortBy, filterStatus, sortBy }) {

    const getStatusWithBadge = (status) => {
        if (status === "Pending") {
            return <span className="badge badge-yellow">Pending</span>
        } else if (status === "In Progress") {
            return <span className="badge badge-blue">In Progress</span>
        } else if (status === "Done") {
            return <span className="badge badge-green">Done</span>
        }
    }

    const counts = allTasks.reduce((acc, task) => {
        if (task.status === "Pending") {
            acc.pending++;
        } else if (task.status === "In Progress") {
            acc.inProgress++;
        } else if (task.status === "Done") {
            acc.done++;
        }
        return acc;
    }, {
        total: allTasks.length,
        pending: 0,
        inProgress: 0,
        done: 0
    })

    return (
        <>
            <div className="d-flex justify-content-end" style={{ "margin": "10px 0px", "gap": "10px", "flexDirection": "column" }}>
                <div className="d-flex" style={{ "gap": "10px" }}>
                    <span style={{ "fontWeight": "600" }}>Filter Status:</span>
                    <select className="form-select" value={filterStatus} onChange={(e) => onFilterStatus(e.target.value)} className="form-select">
                        <option value="All">All</option>
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                    </select>
                </div>
                <div className="d-flex" style={{ "gap": "10px" }}>
                    <span style={{ "fontWeight": "600" }}>Sort By:</span>
                    <select className="form-select" value={sortBy} onChange={(e) => onSortBy(e.target.value)} className="form-select">
                        <option value="asc">Due Date (Ascending)</option>
                        <option value="desc">Due Date (Descending)</option>
                    </select>
                </div>
            </div >
            <div className="table-container" style={{ "marginBottom": "30px" }}>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th className="text-nowrap">Due Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="text-center">No Tasks Added</td>
                            </tr>
                        ) : (
                            tasks.map((task, index) => (
                                <tr key={task.id}>
                                    <td>{index + 1}</td>
                                    <td>{task.title}</td>
                                    <td className="text-nowrap">{task.dueDate}</td>
                                    <td>{getStatusWithBadge(task.status)}</td>
                                    <td>
                                        <div className="d-flex justify-content-center" style={{ gap: "10px" }}>
                                            <button className="btn-small" onClick={() => onEditTask(task)}>Edit</button>
                                            <button className="btn-small" onClick={() => {
                                                if (window.confirm("Are you sure, you want to delete this task?")) {
                                                    onDeleteTask(task.id);
                                                } else {
                                                    return;
                                                }
                                            }}>
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <div className="taskSummary">
                <h2>Task Summary</h2>
                <p>
                    {counts.total} {counts.total > 1 ? "Tasks" : "Task"} :{" "}
                    {counts.done} Done,{" "}
                    {counts.inProgress} In Progress,{" "}
                    {counts.pending} Pending
                </p>
            </div>
        </>
    )
}

export default TaskList