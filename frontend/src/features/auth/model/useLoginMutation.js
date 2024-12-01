import { useState } from 'react';

// Пример функции для отправки запроса на логин
const loginRequest = async (credentials) => {
  // Это место, где вы бы отправили запрос на ваш сервер
  // Например, с использованием fetch или axios
  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return response.json();
};

export const useLoginMutation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const mutate = async (credentials) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await loginRequest(credentials);
      // Обработка успешного логина, например, сохранение токена
      console.log('Login successful:', data);
    } catch (err) {
      setError(err.message);
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return { mutate, isLoading, error };
};
