// ChildComponent.jsx
import React from 'react';

function ChildComponent(props) {
  // Destructuring props for easier access
  const { name, age } = props;

  return (
    <div>
      <h2>Child Component</h2>
      <p>Hello, my name is {name} and I am {age} years old.</p>
    </div>
  );
}

export default ChildComponent;