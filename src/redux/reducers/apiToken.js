import { SAVE_API_TOKEN } from '../actions';

const INITIAL_STATE = {
  token: '',
};

const apiToken = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_API_TOKEN:
    return {
      ...state,
      token: action.token,
    };
  default:
    return state;
  }
};

export default apiToken;
