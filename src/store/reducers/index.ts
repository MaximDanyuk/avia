/*eslint-disable */
import { combineReducers } from 'redux';
import { mainFilterReducer } from './mainFilterReducer';
import { sideFilterReducer } from './sideFilterReducer';
import { ticketReducer } from './ticketReducer';
import { isLoadReducer } from './isLoadReducer';
import { totalPageReducer } from './totalPageReducer';

export const rootReducer = combineReducers({
  ticket: ticketReducer,
  mainFilter: mainFilterReducer,
  sideFilter: sideFilterReducer,
  isLoad: isLoadReducer,
  totalPage: totalPageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
