import React from 'react';

function Task({ task }) {
  return (
    <div style={{ padding: 10, margin: 5, backgroundColor: '#f0f0f0' }}>
      {task.content}
    </div>
  );
}

export default Task;
