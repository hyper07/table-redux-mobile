// combine redux modules
import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import api from './api';
import loadmore from './loadmore';

export default combineReducers({
  api,
  loadmore,
  pender: penderReducer
}); 