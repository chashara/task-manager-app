import React from 'react';
import Task from './Task';

function Column({ column }) {
  return (
    <div style={{ margin: 10, width: 300 }}>
      <h2>{column.title}</h2>
      {column.tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default Column;
