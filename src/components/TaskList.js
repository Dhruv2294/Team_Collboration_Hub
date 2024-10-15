import React from 'react';

const TaskList = ({ tasks, onDelete, onEdit, filters }) => {
    const filteredTasks = tasks.filter(task => {
        return (
            (filters.status === 'all' || task.status === filters.status) &&
            (filters.priority === 'all' || task.priority === filters.priority) &&
            (filters.dueDate === '' || task.dueDate === filters.dueDate)
        );
    });

    return (
        <div className="task-list">
            {filteredTasks.map((task, index) => (
                <div key={index} className="task-item">
                    <h3>{task.name}</h3>
                    <p>Status: {task.status}</p>
                    <p>Priority: {task.priority}</p>
                    <p>Due: {task.dueDate}</p>
                    <button onClick={() => onEdit(task)}>Edit</button>
                    <button onClick={() => onDelete(task)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
