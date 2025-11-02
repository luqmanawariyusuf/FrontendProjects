// ParentComponent.jsx
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const userName = "Alice";
  const userAge = 30;

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent name={userName} age={userAge} />
    </div>
  );
}

export default ParentComponent;