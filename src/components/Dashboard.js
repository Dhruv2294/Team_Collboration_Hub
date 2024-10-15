import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'; 
const Dashboard = () => {
    const navigate = useNavigate(); 
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState({ name: '', status: '', priority: '', dueDate: '' });
    const [editingTaskIndex, setEditingTaskIndex] = useState(null);
    const [filter, setFilter] = useState({ status: '', priority: '', dueDate: '' });

  
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleAddOrUpdateTask = (e) => {
        e.preventDefault();
        if (editingTaskIndex !== null) {
            const updatedTasks = tasks.map((t, index) => (index === editingTaskIndex ? task : t));
            setTasks(updatedTasks);
            setEditingTaskIndex(null);
        } else {
            setTasks([...tasks, task]);
        }
        setTask({ name: '', status: '', priority: '', dueDate: '' });
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

   
    const handleEditTask = (index) => {
        setTask(tasks[index]);
        setEditingTaskIndex(index);
    };

    const filteredTasks = tasks.filter((t) =>
        (!filter.status || t.status === filter.status) &&
        (!filter.priority || t.priority === filter.priority) &&
        (!filter.dueDate || t.dueDate === filter.dueDate)
    );

 
    const handleBackToLogin = () => {
        navigate('/login'); 
    };

    const handleGoToDashboard = () => {
        navigate('/'); 
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4"> Dashboard</h2>

          
            <form className="mb-4" onSubmit={handleAddOrUpdateTask} style={{ width: "100%" }}>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Task Name"
                            value={task.name}
                            onChange={handleInputChange}
                            className="form-control form-control-lg"
                            required
                        />
                    </div>
                    <div className="col-md-2">
                        <select name="status" value={task.status} onChange={handleInputChange} className="form-select form-select-lg" required>
                            <option value="">Status</option>
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                            <option value="assigned">Assigned</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <select name="priority" value={task.priority} onChange={handleInputChange} className="form-select form-select-lg" required>
                            <option value="">Priority</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                            <option value="urgent">Urgent</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <input
                            type="date"
                            name="dueDate"
                            value={task.dueDate}
                            onChange={handleInputChange}
                            className="form-control form-control-lg"
                            required
                        />
                    </div>
                    <div className="col-md-1">
                        <button type="submit" className="btn btn-success btn-lg w-100">
                            {editingTaskIndex !== null ? 'Update' : 'Add'}
                        </button>
                    </div>
                </div>
            </form>

            <div className="row">
                {filteredTasks.map((task, index) => (
                    <div className="col-12 mb-4" key={index}>
                        <div className="card shadow">
                            <div className="card-body">
                                <h5 className="card-title">{task.name}</h5>
                                <p className="card-text">
                                    <strong>Status:</strong> {task.status} <br />
                                    <strong>Priority:</strong> {task.priority} <br />
                                    <strong>Due Date:</strong> {task.dueDate}
                                </p>
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-info me-2" onClick={() => handleEditTask(index)}>
                                        Edit
                                    </button>
                                    <button className="btn btn-danger" onClick={() => handleDeleteTask(index)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>

           
            <div className="text-center mt-4">
                <button className="btn btn-success" onClick={handleGoToDashboard}>
                    Chat Here
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
