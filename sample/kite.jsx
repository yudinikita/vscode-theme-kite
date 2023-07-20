import React from 'react';

const element = (
  <div>
    <h1>Hello, JSX!</h1>
    <p>This is a short example demonstrating JSX elements.</p>
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
    {showButton && <button onClick={handleClick}>Click me</button>}
  </div>
);

export default element;
