import lotoReducer from './loto.slice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  loto: lotoReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
