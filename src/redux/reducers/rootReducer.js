import { combineReducers } from 'redux';
import dataSliceReducer from './dataslice';

const rootReducer = combineReducers({
  data: dataSliceReducer,
});

export default rootReducer;
