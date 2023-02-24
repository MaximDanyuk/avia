/*eslint-disable */
export interface IInitialState {
  isLoad: boolean;
}

export enum ActionEnum {
  IS_LOAD = 'IS_LOAD',
}

interface IIsLoadAction {
  type: ActionEnum.IS_LOAD;
  payload: boolean;
}

export type ActionType = IIsLoadAction;
