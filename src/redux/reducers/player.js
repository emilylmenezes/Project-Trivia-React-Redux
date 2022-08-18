import {
  SAVE_DATA_USER,
  SAVE_PLAYER_SCORE,
  SAVE_ASSERTIONS,
  CLEAR_CURRENT_DATA,
} from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_DATA_USER:
    return {
      ...state,
      name: action.dataUser.name,
      gravatarEmail: action.dataUser.email,
    };
  case SAVE_PLAYER_SCORE:
    return {
      ...state,
      score: state.score + action.score,
    };
  case SAVE_ASSERTIONS:
    return {
      ...state,
      assertions: state.assertions + 1,
    };
  case CLEAR_CURRENT_DATA:
    return {
      ...state,
      name: '',
      assertions: 0,
      score: 0,
      gravatarEmail: '',
    };
  default:
    return state;
  }
};

export default player;
