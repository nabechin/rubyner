import { apiClient } from '~/lib/axios';

export type Task = {
  id: string;
  name: string;
};

export const getTasks = async (): Promise<Task[]> => {
  const res = await apiClient.get('tasks');
  return res.data.tasks;
};

export const createTask = async (task: Omit<Task, 'id'>): Promise<Task> => {
  const res = await apiClient.post('tasks', task);
  return res.data.task;
};

export const deleteTask = async (id: string): Promise<Task> => {
  const res = await apiClient.delete(`tasks/${id}`);
  return res.data.task;
};
