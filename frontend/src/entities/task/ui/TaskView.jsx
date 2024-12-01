import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetTaskByIdQuery } from '../model/useGetTaskByIdQuery';

export const TaskView = () => {
  const { id } = useParams();
  const { data: task, isLoading } = useGetTaskByIdQuery(Number(id));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Task: {task.title}</h1>
      <p>{task.description}</p>
    </div>
  );
};
