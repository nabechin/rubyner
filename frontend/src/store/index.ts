import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducer';
import { TaskState } from './reducer/task';

export const store = createStore(reducer, applyMiddleware(thunk));

export type RootState = {
  task: TaskState;
};
