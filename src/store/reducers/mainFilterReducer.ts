/*eslint-disable */
import {
  ActionType,
  IInitialState,
  ActionEnum,
} from '../../types/mainFilter';

const initialState: IInitialState = {
  quality: 'Самый дешевый',
};

export const mainFilterReducer = (
  state = initialState,
  action: ActionType,
): IInitialState => {
  switch (action.type) {
    case ActionEnum.FIX_SORTING:
      return { quality: action.payload };
    default:
      return state;
  }
};
