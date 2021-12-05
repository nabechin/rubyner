import { combineReducers } from 'redux';
import { TaskReducer } from './task';

export const reducer = combineReducers({
  task: TaskReducer,
});
