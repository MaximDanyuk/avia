/*eslint-disable */

import { Dispatch } from 'redux';
import { ActionEnum, ActionType } from '../../types/ticket';
import {
  ActionEnum as ActionEnumLoad,
  ActionType as ActionTypeLoad,
} from '../../types/isLoad';

const fetchTickets = async (id: number) => {
  let tickets: { tickets: any[]; stop: boolean } = {
    tickets: [],
    stop: false,
  };

  try {
    let resTickets = await fetch(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${id}`,
    );

    tickets = await resTickets.json();
    return tickets;
  } catch (e) {
    let alsoTickets: any = await fetchTickets(id);
    return alsoTickets;
  }
};

export const getInitialTickets =
  () => async (dispatch: Dispatch<ActionType | ActionTypeLoad>) => {
    const response = await fetch(
      'https://aviasales-test-api.kata.academy/search',
    );
    const { searchId } = await response.json();
    let loading = true;
    while (loading) {
      const { tickets, stop } = await fetchTickets(searchId);
      loading = !stop;
      dispatch({
        type: ActionEnumLoad.IS_LOAD,
        payload: loading,
      });
      if (loading) {
        dispatch({
          type: ActionEnum.FETCH_TICKETS_SUCCESS,
          payload: tickets,
        });
      }
    }
  };

/* export const fetchMoreTickets = ( number: number ) => {
  return { type: ActionEnum.FETCH_TICKETS };
};
 */
/*   const tickets = ticketList.map((ticket: any) => ({
          ...ticket,
        })); */
