import { Task } from '~/domain/task';
import { TaskAction } from '../action/task';

export type TaskState = {
  tasks: Task[];
};
const initialState = {
  tasks: [],
};

export const TaskReducer = (
  state: TaskState = initialState,
  action: TaskAction
) => {
  switch (action.type) {
    case 'GET':
      return { ...state, tasks: [...state.tasks, ...action.payload] };
    case 'CREATE':
      return { ...state, tasks: [...state.tasks, ...[action.payload]] };
    case 'PUT':
      const tasks = state.tasks.reduce((arr: Task[], curr: Task) => {
        if (curr.id === action.payload.id) {
          arr.push(action.payload);
        } else arr.push(curr);
        return arr;
      }, []);
      return { ...state, tasks: tasks };
    case 'DELETE':
      return {
        ...state,
        tasks: [...state.tasks.filter((t) => t.id !== action.payload.id)],
      };
    default:
      return state;
  }
};
