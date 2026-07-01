import { useState } from "react"
import TaskList from "./TaskList"

function TaskForm({ project, projects, onSetProjects }) {
    const [task, setTask] = useState({
        id: null,
        title: "",
        dueDate: "",
        status: ""
    });
    const [sortBy, setSortBy] = useState("asc");
    const [filterStatus, setFilterStatus] = useState("All");

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    }

    const handleClick = () => {
        if (!task.title.trim()) {
            alert("Task Title is required");
            return;
        }
        if (!task.dueDate) {
            alert("Due Date is required");
            return;
        }
        const date = new Date();
        const isodate = date.toISOString().split('T')[0];
        if (task.dueDate < isodate) {
            alert("Due date cannot be earlier than today.");
            return;
        }
        if (!task.status) {
            alert("Status is required");
            return;
        }

        if (task.id) {
            const updatedProjects = projects.map((p) =>
                p.id === project.id ?
                    {
                        ...p, tasks: p.tasks.map((t) =>
                            t.id === task.id ?
                                task : t)
                    }
                    : p
            );

            onSetProjects(updatedProjects);
            localStorage.setItem("projects", JSON.stringify(updatedProjects));

        } else {
            const newTask = {
                ...task,
                id: Date.now()
            };

            const updatedProjects = projects.map((p) =>
                p.id === project.id ?
                    { ...p, tasks: [...(p.tasks || []), newTask] }
                    : p
            );

            onSetProjects(updatedProjects);
            localStorage.setItem("projects", JSON.stringify(updatedProjects));
        }

        setTask({
            id: null,
            title: "",
            dueDate: "",
            status: ""
        });
    }

    const handleDeleteTask = (taskId) => {
        if (taskId) {
            const updatedProjects = projects.map((p) =>
                p.id === project.id ?
                    { ...p, tasks: p.tasks.filter((task) => task.id !== taskId) } : p
            )

            onSetProjects(updatedProjects);
            localStorage.setItem("projects", JSON.stringify(updatedProjects));

            if (task.id === taskId) {
                setTask({
                    id: null,
                    title: "",
                    dueDate: "",
                    status: ""
                });
            }

            alert("Task deleted successfully")
        }
    }

    const currentProject = projects.find(p => p.id === project.id);
    const tasks = currentProject?.tasks || [];
    let processedTasks = [...tasks];

    if (filterStatus !== "All") {
        processedTasks = processedTasks.filter(
            (task) => task.status === filterStatus
        );
    }

    if (sortBy === "asc") {
        processedTasks.sort((a, b) =>
            a.dueDate.localeCompare(b.dueDate)
        );
    } else {
        processedTasks.sort((a, b) =>
            b.dueDate.localeCompare(a.dueDate)
        );
    }

    return (
        <>
            <div className="task-form">
                <h2 style={{ "marginTop": "4px", "marginLeft": "4px" }}>Task</h2>
                <div className="task-fields">

                    <input type="text" id="title" name="title" value={task.title} onChange={handleChange} className="task-input task-title" placeholder="Enter your task..." />
                    <label htmlFor="dueDate" style={{ "marginBottom": "0px" }} >Due Date</label>
                    <input type="date" id="dueDate" name="dueDate" value={task.dueDate} onChange={handleChange} className="task-input" style={{ "marginTop": "0px", "paddingTop": "0px" }} />

                    <select name="status" id="status" value={task.status} onChange={handleChange} className="task-input">
                        <option value="">Select Status</option>
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                    </select>

                    <button className="btn btn-green addTaskBtn" style={{ "marginTop": "0px" }} onClick={handleClick}>
                        {task.id ? "Update Task" : "Add Task"}
                    </button>

                </div>
            </div>

            <TaskList tasks={processedTasks} allTasks={currentProject?.tasks || []} onEditTask={setTask} onDeleteTask={handleDeleteTask} onFilterStatus={setFilterStatus} onSortBy={setSortBy} filterStatus={filterStatus} sortBy={sortBy} />
        </>
    )
}

export default TaskForm