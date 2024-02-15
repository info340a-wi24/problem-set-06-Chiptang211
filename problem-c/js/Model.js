'use strict';
import initialTasks from './task-data.js';

let currentTaskList = initialTasks.map((task, index) => ({ ...task, id: index + 1 }));

export function getIncompleteTasks() {
    return currentTaskList.filter(task => task.status === 'incomplete');
}

export function addTask(description) {
    const newId = currentTaskList.length > 0 ? currentTaskList[currentTaskList.length - 1].id + 1 : 1;
    currentTaskList = [...currentTaskList, { id: newId, description: description, status: 'incomplete' }];
}

export function markComplete(taskId) {
    currentTaskList = currentTaskList.map(task => {
        if (task.id === taskId) {
            // Return a new object with updated 'status' if the id matches
            return { ...task, status: 'complete' };
        } else {
            // Return a new object copy of the task to ensure the reference is different
            return { ...task };
        }
    });
}