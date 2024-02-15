'use strict';

import { getIncompleteTasks } from './Model.js';

function renderSingleTask(task, markCompleteCallback) {
  const li = document.createElement('li');
  li.className = 'list-group-item';
  li.textContent = ` ${task.description}`;

  const button = document.createElement('button');
  button.className = 'btn btn-sm btn-warning';
  button.innerHTML = '<span class="material-icons-outlined">done</span>';
  button.addEventListener('click', () => markCompleteCallback(task.id));

  li.prepend(button);

  return li;
}

export function renderTaskList(markCompleteCallback) {
  const tasks = getIncompleteTasks();
  if (tasks.length === 0) {
    const div = document.createElement('div');
    div.textContent = 'None!';
    return div;
  }

  const ul = document.createElement('ul');
  ul.className = 'list-group list-group-flush';
  tasks.forEach(task => {
    ul.appendChild(renderSingleTask(task, markCompleteCallback));
  });

  return ul;
}