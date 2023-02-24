/*eslint-disable */
import {
  ActionType,
  IInitialState,
  ActionEnum,
} from '../../types/ticket';

const initialState: IInitialState = {
  tickets: [],
};

export const ticketReducer = (
  state = initialState,
  action: ActionType,
): IInitialState => {
  switch (action.type) {
    case ActionEnum.FETCH_TICKETS_SUCCESS:
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload],
      };
    default:
      return state;
  }
};
