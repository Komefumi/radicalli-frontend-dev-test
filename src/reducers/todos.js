import dotProp from 'dot-prop';

import {
  ADD_TODO,
  SET_EDITING,
  CONFIRM_EDIT,
  RESET_EDITING,
} from '../constants';

import { MockTodos as createMockTodos } from '../mock_data/todos';

const defaultState = {
  todos: createMockTodos(),
  editing: null,
};

function todosReducer(state = defaultState, action) {
  let todos;
  switch (action.type) {
    case ADD_TODO:
      todos = [...state.todos, action.payload];
      return { ...state, todos };
    case SET_EDITING:
      console.log({ 'action.payload': action.payload });
      return { ...state, editing: action.payload };
    case CONFIRM_EDIT:
      const idSelected = dotProp(state, 'editing.id');
      const isNew = dotProp(state, 'editing.new');
      if (isNew) {
        todos = [...state.todos, { ...state.editing, new: undefined }];
      } else {
        todos = [
          ...state.todos.filter(({ id }) => id !== idSelected),
          state.editing,
        ];
      }
      return { ...state, editing: null, todos };
    case RESET_EDITING:
      return { ...state, editing: null };
    // return action.payload;
    default:
      return state;
  }
  // return state;
}

export default todosReducer;
