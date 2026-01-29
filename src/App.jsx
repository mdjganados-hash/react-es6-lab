import { useState } from 'react';
import './App.css';

function App() {
  // -------------------------
  // Login State
  // -------------------------
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // -------------------------
  // Counter State
  // -------------------------
  const [count, setCount] = useState(0);

  // -------------------------
  // Login Handlers
  // -------------------------
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@skyline.com' && password === '1234') {
      setIsLoggedIn(true);
      setError('');
      setEmail('');
      setPassword('');
    } else {
      setError('Invalid email or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // -------------------------
  // App JSX
  // -------------------------
  return (
    <div className="App">

      {/* Conditional Rendering: Login Form or Dashboard */}
      {isLoggedIn ? (
        <div className="dashboard">
          <h2>Welcome! You are logged in 🚀</h2>
          <button onClick={handleLogout}>Logout</button>

          {/* Counter */}
          <div style={{ marginTop: '20px' }}>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
          </div>
        </div>
      ) : (
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={error ? 'input-error' : ''}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={error ? 'input-error' : ''}
              required
            />
            {error && <p className="error-text">{error}</p>}
            <button type="submit">Login</button>
          </form>
        </div>
      )}

    </div>
  );
}

export default App;
