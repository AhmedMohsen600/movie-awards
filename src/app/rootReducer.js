import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import nomineeReducer from '../slices/nomineSlice';
import modalReducer from '../slices/modalSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  nominees: nomineeReducer,
  modal: modalReducer,
});

export default rootReducer;
