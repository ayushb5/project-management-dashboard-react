import { useState } from "react"
import TaskList from "./TaskList"

function TaskForm({ project, projects, onSetProjects }) {
    const [task, setTask] = useState({
        title: "",
        dueDate: "",
        status: ""
    })

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    }

    const saveTask = () => {

        if (!task.title.trim()) {
            alert("Task Title is required");
            return;
        }
        if (!task.dueDate) {
            alert("Due Date is required");
            return;
        }
        if (!task.status) {
            alert("Status is required");
            return;
        }

        const newTask = {
            id: Date.now(),
            ...task
        };

        const updatedProjects = projects.map((p) =>
            p.id === project.id ?
                { ...p, tasks: [...(p.tasks || []), newTask] }
                : p
        );

        onSetProjects(updatedProjects);
        localStorage.setItem("projects", JSON.stringify(updatedProjects));

        setTask({
            title: "",
            dueDate: "",
            status: ""
        });
    }

    const currentProject = projects.find(p => p.id === project.id);

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

                    <button className="btn btn-green addTaskBtn" style={{ "marginTop": "0px" }} onClick={saveTask}>Add Task</button>

                </div>
            </div>

            <TaskList tasks={currentProject?.tasks || []} />
        </>
    )
}

export default TaskForm