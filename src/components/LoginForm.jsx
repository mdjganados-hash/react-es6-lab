import { useState } from 'react';
import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';

const LoginForm = ({ onLogin, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <Card>
      <h2>SkyLine Analytics Login</h2>

      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error}
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={error}
        />

        {error && <p className="error-text">{error}</p>}

        <Button text="Login" />
      </form>
    </Card>
  );
};

export default LoginForm;
