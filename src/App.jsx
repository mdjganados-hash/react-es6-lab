import { useState, useEffect } from 'react';
import UserList from './UserList';
import Counter from './Counter';
import UserAPI from './UserAPI';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  // ES6+ examples (run once)
  useEffect(() => {
    const names = ['Alice', 'Bob', 'Charlie'];
    const doubled = names.map(name => name.length * 2);
    console.log('Doubled lengths:', doubled);

    const person = { name: 'Alice', age: 25 };
    const { name, age } = person;
    console.log('Destructured:', name, age);
  }, []);

  // Static users for UserList
  const users = ['Alice', 'Bob', 'Charlie'];

  // Login simulation
  const isLoggedIn = false; // toggle to false to test conditional rendering

  return (
    <div className="App">
      {/* Conditional Rendering */}
      <div>
        {isLoggedIn ? <p>Welcome back!???!!!?!?!?!</p> : <p>Please log in..... lol</p>}
      </div>

      {/* Static user list */}
      <h1>User List</h1>
      <UserList users={users} />

      {/* Counter component */}
      <h2>Counter Example</h2>
      <Counter />

      {/* API-fetched user list */}
      <h2>Users from API</h2>
      <UserAPI />

      {/* Logos */}
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
