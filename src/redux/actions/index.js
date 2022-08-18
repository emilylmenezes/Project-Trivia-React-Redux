export const SAVE_API_TOKEN = 'SAVE_API_TOKEN';
export const SAVE_DATA_USER = 'SAVE_DATA_USER';
export const SAVE_PLAYER_SCORE = 'SAVE_PLAYER_SCORE';
export const SAVE_ASSERTIONS = 'SAVE_ASSERTIONS';
export const CLEAR_CURRENT_DATA = 'CLEAR_CURRENT_DATA';

export const saveApiToken = (token) => ({
  type: SAVE_API_TOKEN,
  token,
});

export const saveDataUser = (dataUser) => ({
  type: SAVE_DATA_USER,
  dataUser,
});

export const savePlayerScore = (score) => ({
  type: SAVE_PLAYER_SCORE,
  score,
});

export const saveAssertions = () => ({
  type: SAVE_ASSERTIONS,
});

export const clearCurrentData = () => ({
  type: CLEAR_CURRENT_DATA,
});
