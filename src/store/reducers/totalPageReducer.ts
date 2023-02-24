/*eslint-disable */
import {
  ActionType,
  IInitialState,
  ActionEnum,
} from '../../types/totalPage';

const initialState: IInitialState = {
  totalPage: 0,
};

export const totalPageReducer = (
  state = initialState,
  action: ActionType,
): IInitialState => {
  switch (action.type) {
    case ActionEnum.SHOW_MORE_TICKETS:
      return {
        ...state,
        totalPage: state.totalPage + action.payload,
      };
    default:
      return state;
  }
};
