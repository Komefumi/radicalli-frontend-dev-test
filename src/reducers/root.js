import { combineReducers } from 'redux';

import todos from './todos';

const rootReducer = combineReducers({ todoState: todos });

export default rootReducer;
