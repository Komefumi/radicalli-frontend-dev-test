import { LIGHT, DARK, TOGGLE_MODE } from '../constants';

const defaultState = {
  mode: LIGHT,
};

function applicationReducer(state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_MODE:
      return { ...state, mode: state.mode === LIGHT ? DARK : LIGHT };
    default:
      return state;
  }
}

export default applicationReducer;
