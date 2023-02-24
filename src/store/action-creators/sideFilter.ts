/*eslint-disable */
import { ActionEnum, ActionType } from '../../types/sideFilter';

export const sideFilterCreator = (
  quantity: (string | number | boolean)[],
  checkAll: boolean,
  indeterminate: boolean,
) => {
  return {
    type: ActionEnum.FIX_QUANTITY,
    payload: {
      quantity,
      checkAll,
      indeterminate,
    },
  };
};
