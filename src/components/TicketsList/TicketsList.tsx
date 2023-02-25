/*eslint-disable */

import React, { useEffect, useMemo } from 'react';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Ticket from '../Ticket/Ticket';
import styles from './TicketsList.module.scss';
import nextId from 'react-id-generator';
import loadImage from '../../images/loadImage.gif';
import { ITicket } from '../../interfaces/ticketInterfaces';

const TicketsList: React.FC = () => {
  const { tickets } = useTypedSelector((state) => state.ticket);
  const { isLoad } = useTypedSelector((state) => state.isLoad);
  const { totalPage } = useTypedSelector((state) => state.totalPage);
  const { quantity } = useTypedSelector((state) => state.sideFilter);
  const quality = useTypedSelector((state) => state.mainFilter);
  const { showMoreTickets } = useAction();
  const { getInitialTickets } = useAction();

  const codificationStops = (el: any) => {
    switch (el) {
      case 'Без пересадок':
        return 0;
      case '1 пересадка':
        return 1;
      case '2 пересадки':
        return 2;
      case '3 пересадки':
        return 3;
      default:
        return 0;
    }
  };

  type checkWhatFilteredType = (string | number | boolean)[];
  const checkWhatFiltered = (
    stopsQualityArray: checkWhatFilteredType,
  ) => {
    return stopsQualityArray.map((el) => codificationStops(el));
  };
  const getFilteredTickets = (
    tickets: ITicket[],
    stopsQualityArray: number[],
    sortParam: string,
  ): ITicket[] => {
    const filteredTickets: any[] = [];

    stopsQualityArray.forEach((code) => {
      tickets.forEach((ticket) => {
        if (code === ticket.segments[0].stops.length) {
          filteredTickets.push(ticket);
        }
      });
    });

    if (sortParam === 'Самый дешевый') {
      filteredTickets.sort((a, b) => a.price - b.price);
    }
    if (sortParam === 'Самый быстрый') {
      filteredTickets.sort(
        (a, b) =>
          a.segments[0].duration +
          a.segments[1].duration -
          (b.segments[0].duration + b.segments[1].duration),
      );
    }
    console.log(filteredTickets);
    return filteredTickets;
  };

  useEffect(() => {
    getInitialTickets();
  }, []);

  const filteredDataArray: ITicket[] = useMemo((): ITicket[] => {
    return getFilteredTickets(
      tickets,
      checkWhatFiltered(quantity),
      quality.quality,
    );
  }, [tickets, quantity, quality.quality]);

  const handleShowMoreTickets = () => {
    showMoreTickets(5);
  };

  return (
    <div className={styles['ticket-list']}>
      {isLoad && <img src={loadImage} />}
      {filteredDataArray.length ? (
        filteredDataArray
          .slice(0, totalPage + 5)
          .map((el: ITicket) => <Ticket {...el} key={nextId()} />)
      ) : (
        <h2>"Рейсов, подходящих под заданные фильтры, не найдено"</h2>
      )}
      <button
        className={styles['ticket-list__pagination']}
        style={
          filteredDataArray.length ? undefined : { display: 'none' }
        }
        onClick={handleShowMoreTickets}
        disabled={!filteredDataArray.length}
      >
        Показать еще 5 билетов!
      </button>
    </div>
  );
};

export default TicketsList;
