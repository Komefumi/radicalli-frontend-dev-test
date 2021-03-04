import { useSelector } from 'react-redux';
import dotProp from 'dot-prop';
import { DARK } from './constants';

function useIsDarkMode() {
  const isDarkMode = useSelector(
    (state) => dotProp.get(state, 'appState.mode') === DARK
  );
  return isDarkMode;
}

function useGetTodoState() {
  const todoState = useSelector((state) => dotProp.get(state, 'todoState'));
  return todoState;
}

export { useIsDarkMode, useGetTodoState };
