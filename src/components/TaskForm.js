import React, { useState } from 'react';

const TaskForm = ({ onSubmit, task = {} }) => {
    const [name, setName] = useState(task.name || '');
    const [status, setStatus] = useState(task.status || 'pending');
    const [priority, setPriority] = useState(task.priority || 'low');
    const [dueDate, setDueDate] = useState(task.dueDate || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, status, priority, dueDate });
        setName('');
        setStatus('pending');
        setPriority('low');
        setDueDate('');
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                placeholder="Task Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="assigned">Assigned</option>
            </select>
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
            </select>
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
            />
            <button type="submit">Save Task</button>
        </form>
    );
};

export default TaskForm;
