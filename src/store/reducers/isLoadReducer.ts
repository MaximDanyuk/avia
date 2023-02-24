/*eslint-disable */
import {
  ActionType,
  IInitialState,
  ActionEnum,
} from '../../types/isLoad';

const initialState: IInitialState = {
  isLoad: false,
};

export const isLoadReducer = (
  state = initialState,
  action: ActionType,
): IInitialState => {
  switch (action.type) {
    case ActionEnum.IS_LOAD:
      return {
        isLoad: action.payload,
      };
    default:
      return state;
  }
};
