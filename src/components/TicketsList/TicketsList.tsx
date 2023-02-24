/*eslint-disable */

import React, { useEffect, useState } from 'react';
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
  const [filtered, setFiltered] = useState<ITicket[]>([]);
  /*   const quality = useTypedSelector((state) => state.mainFilter); */
  const { showMoreTickets } = useAction();
  const { getInitialTickets } = useAction();

  useEffect(() => {
    getInitialTickets();
  }, []);

  const handleShowMoreTickets = () => {
    showMoreTickets(5);
  };

  useEffect(() => {
    if (quantity.length === 4) {
      setFiltered(tickets);
    } else {
      if (quantity.includes('1 пересадка')) {
        const oneStopTickets: ITicket[] = tickets.filter(
          (el) =>
            el.segments[0].stops.length === 1 ||
            el.segments[1].stops.length === 1,
        );
        setFiltered([...oneStopTickets, ...filtered]);
      }
      if (quantity.includes('2 пересадки')) {
        const secStopTickets = tickets.filter(
          (el) =>
            el.segments[0].stops.length === 2 ||
            el.segments[1].stops.length === 2,
        );
        setFiltered([...secStopTickets, ...filtered]);
      }
      if (quantity.includes('3 пересадки')) {
        const thirdStopTickets = tickets.filter(
          (el) =>
            el.segments[0].stops.length === 3 ||
            el.segments[1].stops.length === 3,
        );
        setFiltered([...thirdStopTickets, ...filtered]);
      }
      if (quantity.includes('Без пересадок')) {
        const zeroStopTickets = tickets.filter(
          (el) =>
            el.segments[0].stops.length === 0 ||
            el.segments[1].stops.length === 0,
        );
        setFiltered([...zeroStopTickets, ...filtered]);
      }
    }
    if (quantity.length === 0) {
      setFiltered([]);
    }
  }, [tickets, quantity]);

  /*   useEffect(() => {
    if (quality.quality === "САМЫЙ ДЕШЕВЫЙ") {
    setFiltered(filtered.sort((a,b) => a.price - b.price))
    } 
    if (quality.quality === "САМЫЙ БЫСТРЫЙ") {
      setFiltered(filtered.sort((a,b) => a.segments[0].destination - b.segments[0].destination))
    } 
    if (quality.quality === "ОПТИМАЛЬНЫЙ") {
      setFiltered(filtered.sort((a,b) => a.price - b.price))
    } 
     
  }, [tickets, quality, filtered]); */

  console.log(filtered);
  /*   Еще один стейт фильтеред */
  return (
    <div className={styles['ticket-list']}>
      {isLoad && <img src={loadImage} />}
      {filtered.length ? (
        filtered
          .slice(0, totalPage + 5)
          .map((el: ITicket) => <Ticket {...el} key={nextId()} />)
      ) : (
        <h2>"Рейсов, подходящих под заданные фильтры, не найдено"</h2>
      )}
      <button
        className={styles['ticket-list__pagination']}
        style={filtered.length ? undefined : { display: 'none' }}
        onClick={handleShowMoreTickets}
        disabled={!filtered.length}
      >
        Показать еще 5 билетов!
      </button>
    </div>
  );
};

export default TicketsList;
