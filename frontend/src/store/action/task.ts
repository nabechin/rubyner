import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { createTask, getTasks, Task, updateTask } from '~/domain/task';

export type TaskAction =
  | { type: 'GET'; payload: Task[] }
  | { type: 'CREATE'; payload: Task }
  | { type: 'PUT'; payload: Task }
  | { type: 'DELETE'; payload: Task };

export const loadAll =
  (): ThunkAction<void, RootState, unknown, TaskAction> =>
  async (dispatch, _, __) => {
    const tasks = await getTasks();
    dispatch({ type: 'GET', payload: tasks });
  };

export const create =
  (
    value: Omit<Task, 'id'>
  ): ThunkAction<void, RootState, unknown, TaskAction> =>
  async (dispatch, _, __) => {
    const task = await createTask(value);
    dispatch({ type: 'CREATE', payload: task });
  };

export const put =
  (value: Task): ThunkAction<void, RootState, unknown, TaskAction> =>
  async (dispatch, _, __) => {
    const task = await updateTask(value);
    dispatch({ type: 'PUT', payload: task });
  };
