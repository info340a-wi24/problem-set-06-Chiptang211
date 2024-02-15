'use strict';

import * as model from './Model.js';
import { renderTaskList } from './View.js';

function markCompleteCallback(taskId) {
  model.markComplete(taskId);
  renderTaskView();
}

export function renderTaskView() {
  const tasksRoot = document.getElementById('tasks-root');
  tasksRoot.innerHTML = '';
  const taskList = renderTaskList(markCompleteCallback);
  tasksRoot.appendChild(taskList);
}

const addButton = document.getElementById('add-task-button');
const taskInput = document.getElementById('task-input');

addButton.addEventListener('click', () => {
  const taskDescription = taskInput.value.trim();
  if (taskDescription) {
    model.addTask(taskDescription);
    taskInput.value = '';
    renderTaskView();
  }
});

renderTaskView();