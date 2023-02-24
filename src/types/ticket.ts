/*eslint-disable */
export interface IInitialState {
  tickets: any[];
}

export enum ActionEnum {
  FETCH_TICKETS_LOAD = 'FETCH_TICKETS_LOAD',
  FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS',
}

interface IFetchTicketsSuccessAction {
  type: ActionEnum.FETCH_TICKETS_SUCCESS;
  payload: any[];
}

export type ActionType = IFetchTicketsSuccessAction;
