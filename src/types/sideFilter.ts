/*eslint-disable */

export interface IInitialState {
  quantity: (string | number | boolean)[];
  checkAll: boolean;
  indeterminate: boolean;
}

export enum ActionEnum {
  FIX_QUANTITY = 'FIX_QUANTITY',
}

interface ISideFilterAction {
  type: ActionEnum.FIX_QUANTITY;
  payload: {
    quantity: (string | number | boolean)[];
    checkAll: boolean;
    indeterminate: boolean;
  };
}

export type ActionType = ISideFilterAction;
