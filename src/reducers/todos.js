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
      const idSelected = dotProp.get(state, 'editing.id');
      const isNew = dotProp.get(state, 'editing.new');
      if (isNew) {
        todos = [...state.todos, { ...state.editing, new: undefined }];
      } else {
        const idxOfItem = state.todos.findIndex(({ id }) => id === idSelected);
        const partA = state.todos.slice(0, idxOfItem);
        const partB = state.todos.slice(idxOfItem + 1);
        todos = [...partA, state.editing, ...partB];
      }
      return { ...state, editing: null, todos };
    case RESET_EDITING:
      return { ...state, editing: null };
    default:
      return state;
  }
}

export default todosReducer;
