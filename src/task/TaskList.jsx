function TaskList({ tasks }) {
    return (
        <>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Due Date</th>
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
                                    <td>{task.dueDate}</td>
                                    <td>{task.status}</td>
                                    <td>
                                        <div className="d-flex justify-content-center" style={{ gap: "10px" }}>
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

export default TaskList