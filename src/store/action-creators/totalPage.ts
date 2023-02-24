/*eslint-disable */
import { ActionEnum } from '../../types/totalPage';

export const showMoreTickets = (quality: number) => {
  return {
    type: ActionEnum.SHOW_MORE_TICKETS,
    payload: quality,
  };
};
