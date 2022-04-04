import React, { ReactElement } from 'react';

type TodolistProps = {
  title: string;
  tasks: Task[];
};

type Task = {
  id: string;
  title: string;
  isDone: boolean;
};

export const Todolist = (props: TodolistProps): ReactElement => {
  const { title, tasks } = props;

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <button type="button">+</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input type="checkbox" checked={task.isDone} />
            <span>{task.title}</span>
          </li>
        ))}
      </ul>
      <div>
        <button type="button">All</button>
        <button type="button">Active</button>
        <button type="button">Completed</button>
      </div>
    </div>
  );
};
