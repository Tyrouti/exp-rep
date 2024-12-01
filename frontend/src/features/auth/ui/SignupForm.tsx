import React, { useState } from 'react';

export const SignupForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError('Failed to signup: ' + errorData.error);
        return;
      }

      const data = await response.json();
      setMessage('User created successfully!');
      setError('');
    } catch (error) {
      console.error('Failed to fetch:', error);
      setError('Failed to fetch: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSignup}>
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
      <button type="submit">Signup</button>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
    </form>
  );
};
