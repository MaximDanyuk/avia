/*eslint-disable */
export interface IInitialState {
  totalPage: number;
}

export enum ActionEnum {
  SHOW_MORE_TICKETS = 'SHOW_MORE_TICKETS',
}

interface IFetchShowMoreTicketsAction {
  type: ActionEnum.SHOW_MORE_TICKETS;
  payload: number;
}

export type ActionType = IFetchShowMoreTicketsAction;
