import React from 'react';

const TaskFilter = ({ filters, setFilters }) => {
    return (
        <div className="task-filter">
            <select
                value={filters.status}
                onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
            >
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="assigned">Assigned</option>
            </select>
            <select
                value={filters.priority}
                onChange={(e) => setFilters(prev => ({ ...prev, priority: e.target.value }))}
            >
                <option value="all">All</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
            </select>
            <input
                type="date"
                value={filters.dueDate}
                onChange={(e) => setFilters(prev => ({ ...prev, dueDate: e.target.value }))}
            />
        </div>
    );
};

export default TaskFilter;
