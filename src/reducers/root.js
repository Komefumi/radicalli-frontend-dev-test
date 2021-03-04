import { combineReducers } from 'redux';

import todos from './todos';
import application from './application';

const rootReducer = combineReducers({
  todoState: todos,
  appState: application,
});

export default rootReducer;
