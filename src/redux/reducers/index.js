
import { combineReducers } from 'redux';
import * as types from '../actions/types';
import employee from './employeeReducer';

const appReducer = combineReducers({
  employee
});


export default appReducer;