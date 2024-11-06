import React, { useState } from 'react';
import Column from './Column';

const initialTasks = {
  'todo': { id: 'todo', title: 'To Do', tasks: [] },
  'inProgress': { id: 'inProgress', title: 'In Progress', tasks: [] },
  'done': { id: 'done', title: 'Done', tasks: [] }
};

function Board() {
  const [columns, setColumns] = useState(initialTasks);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: 20 }}>
      {Object.values(columns).map(column => (
        <Column key={column.id} column={column} />
      ))}
    </div>
  );
}

export default Board;
