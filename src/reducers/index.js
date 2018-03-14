import { combineReducers } from 'redux';
import chuDeReducers from './chuDeReducers';
import yKienReducers from './yKienReducers';

export default combineReducers({
    chuDeReducers,
    yKienReducers,
  });