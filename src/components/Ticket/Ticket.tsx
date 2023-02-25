/*eslint-disable */
import React from 'react';
import styles from './Ticket.module.scss';
import {
  ITicketTemplate,
  TicketProps,
} from '../../interfaces/ticketInterfaces';
import {
  getTicketTargetTime,
  getMinetsToHours,
} from '../../utils/functions.ts';

const classNameLightPar = [
  styles['ticket__text'],
  styles['ticket__text_light'],
].join(' ');

const classNameDarkPar = [
  styles['ticket__text'],
  styles['ticket__text_dark'],
].join(' ');
const classNameTicket = [
  styles['ticket'],
  styles['tickets-list__item'],
].join(' ');

const Ticket: React.FC<TicketProps> = ({
  price,
  carrier,
  segments,
}) => {
  const logo = `https://pics.avs.io/99/36/%7${carrier}%7D.png`;

  const ticketContent = segments.map((ticketInfo) => {
    return (
      <ul className={styles['ticket__content']}>
        <li className={styles['ticket__item-list']}>
          <p
            className={classNameLightPar}
          >{`${ticketInfo.origin} - ${ticketInfo.destination}`}</p>
          <p className={classNameDarkPar}>{`${getTicketTargetTime(
            ticketInfo.date,
            ticketInfo.duration,
          )}`}</p>
        </li>

        <li className={styles['ticket__item-list']}>
          <p className={classNameLightPar}>В пути</p>
          <p className={classNameDarkPar}>
            {getMinetsToHours(ticketInfo.duration)}
          </p>
        </li>

        <li className={styles['ticket__item-list']}>
          <p className={classNameLightPar}>
            {ticketInfo.stops.length
              ? `${ticketInfo.stops.length} пересадки`
              : 'Без пересадок'}
          </p>
          <p className={classNameDarkPar}>
            {ticketInfo.stops.length
              ? ticketInfo.stops.join(', ')
              : ``}
          </p>
        </li>
      </ul>
    );
  });

  return (
    <div className={classNameTicket}>
      <div className={styles['ticket__info']}>
        <p className={styles['ticket__price']}>
          {price.toLocaleString('ru-RU')}₽
        </p>
        <img className={styles['ticket__logo']} src={logo} />
      </div>
      <div className={styles['ticket__content-wrapper']}>
        {ticketContent}
      </div>
    </div>
  );
};

export default Ticket;
