import React, { ReactElement } from 'react';

import './App.css';
import { Todolist } from './Todolist';

const tasks1 = [
  { id: '1', title: 'HTML', isDone: true },
  { id: '2', title: 'CSS', isDone: true },
  { id: '3', title: 'JS', isDone: false },
];
const tasks2 = [
  { id: '1', title: 'Iphone', isDone: true },
  { id: '2', title: 'ipad', isDone: false },
  { id: '3', title: 'macbook', isDone: false },
];

const App = (): ReactElement => (
  <div className="App">
    <Todolist title="What to learn" tasks={tasks1} />
    <Todolist title="What to buy" tasks={tasks2} />
  </div>
);

export default App;
