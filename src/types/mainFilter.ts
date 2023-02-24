/*eslint-disable */
export interface IInitialState {
  quality: string;
}

export enum ActionEnum {
  FIX_SORTING = 'FIX_SORTING',
}

interface IMainFilterAction {
  type: ActionEnum.FIX_SORTING;
  payload: string;
}

export type ActionType = IMainFilterAction;
