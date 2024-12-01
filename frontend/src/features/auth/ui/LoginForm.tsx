import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../app/store/store';
import { setUser } from '../authSlice';

export const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError('Failed to fetch: ' + errorData.error);
        return;
      }

      const data = await response.json();
      dispatch(setUser({ token: data.token }));
      setError('');
    } catch (error) {
      console.error('Failed to fetch:', error);
      setError('Failed to fetch: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
};
