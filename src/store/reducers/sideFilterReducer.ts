/*eslint-disable */

import {
  ActionType,
  IInitialState,
  ActionEnum,
} from '../../types/sideFilter';

const initialState: IInitialState = {
  quantity: [],
  checkAll: true,
  indeterminate: false,
};

export const sideFilterReducer = (
  state = initialState,
  action: ActionType,
): IInitialState => {
  switch (action.type) {
    case ActionEnum.FIX_QUANTITY:
      return {
        ...state,
        quantity: [...action.payload.quantity],
        checkAll: action.payload.checkAll,
        indeterminate: action.payload.indeterminate,
      };
    default:
      return state;
  }
};
