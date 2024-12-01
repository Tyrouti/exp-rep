import { useState, useEffect } from 'react';

export const useGetTaskByIdQuery = (id) => {
  const [task, setTask] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTask = async () => {
      const response = await fetch(`http://localhost:3000/tasks/${id}`);
      const data = await response.json();
      setTask(data);
      setIsLoading(false);
    };

    fetchTask();
  }, [id]);

  return { data: task, isLoading };
};
