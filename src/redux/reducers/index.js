import { combineReducers } from 'redux';
import player from './player';
import apiToken from './apiToken';

const rootReducer = combineReducers({ player, apiToken });

export default rootReducer;
