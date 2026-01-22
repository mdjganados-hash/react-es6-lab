import { useState, useEffect } from 'react';
import UserList from './UserList';
import Counter from './Counter';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  // ES6+ examples (run once on mount)
  useEffect(() => {
    const names = ['Alice', 'Bob', 'Charlie'];
    const doubled = names.map(name => name.length * 2);
    console.log('Doubled lengths:', doubled);

    const person = { name: 'Alice', age: 25 };
    const { name, age } = person;
    console.log('Destructured:', name, age);
  }, []);

  const users = ['Alice', 'Bob', 'Charlie'];

  return (
    <div className="App">
      <h1>User List</h1>
      <UserList users={users} />

      <h2>Counter Example</h2>
      <Counter />

      <div className="logos">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </div>
  );
}

export default App;
