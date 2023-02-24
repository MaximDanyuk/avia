/*eslint-disable */
import { ActionEnum } from '../../types/mainFilter';

export const mainFilterCreator = (quality: string) => {
  return {
    type: ActionEnum.FIX_SORTING,
    payload: quality,
  };
};
