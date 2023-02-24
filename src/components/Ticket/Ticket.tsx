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

import logoFalse from '../../images/Logo.svg';

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

  const isFirstGroupStops = segments[0].stops.toString().length > 0;
  const firstGroupStops: ITicketTemplate = {
    from: segments[0].origin,
    to: segments[0].destination,
    fromTime: segments[0].date.slice(11, 16),
    duration: segments[0].duration,
    toTime: new Date(),
  };

  firstGroupStops.toTime = getTicketTargetTime(
    segments[0].date,
    segments[0].duration,
  );

  if (isFirstGroupStops) {
    (firstGroupStops.stops = segments[0].stops.join(', ')),
      (firstGroupStops.stopsCount = segments[0].stops.length);
  } else {
    firstGroupStops.stops = null;
    firstGroupStops.stopsCount = null;
  }
  const firstDuretion = getMinetsToHours(firstGroupStops.duration);

  const isSecondGroupStops = segments[1].stops.toString().length > 0;
  const secondGroupStops: ITicketTemplate = {
    from: segments[1].origin,
    to: segments[1].destination,
    fromTime: segments[1].date.slice(11, 16),
    duration: segments[1].duration,
    toTime: new Date(),
  };

  secondGroupStops.toTime = getTicketTargetTime(
    segments[1].date,
    segments[1].duration,
  );

  if (isFirstGroupStops) {
    (secondGroupStops.stops = segments[1].stops.join(', ')),
      (secondGroupStops.stopsCount = segments[1].stops.length);
  } else {
    (secondGroupStops.stops = segments[1].stops.join(', ')),
      (secondGroupStops.stopsCount = segments[1].stops.length);
  }
  const secondDuration = getMinetsToHours(secondGroupStops.duration);
  return (
    <div className={classNameTicket}>
      <div className={styles['ticket__info']}>
        <p className={styles['ticket__price']}> {price}p </p>
        <img className={styles['ticket__logo']} src={logo} />
      </div>
      <div className={styles['ticket__content-wrapper']}>
        <ul className={styles['ticket__content']}>
          <li className={styles['ticket__item-list']}>
            <p
              className={classNameLightPar}
            >{`${firstGroupStops.from} - ${firstGroupStops.to}`}</p>
            <p className={classNameDarkPar}>
              {`${firstGroupStops.toTime}`}
            </p>
          </li>
          <li className={styles['ticket__item-list']}>
            <p
              className={classNameLightPar}
            >{`${secondGroupStops.from} - ${secondGroupStops.to}`}</p>
            <p className={classNameDarkPar}>
              {`${secondGroupStops.toTime}`}
            </p>
          </li>
        </ul>

        <ul className={styles['ticket__content']}>
          <li className={styles['ticket__item-list']}>
            <p className={classNameLightPar}>В пути</p>
            <p className={classNameDarkPar}>{firstDuretion}</p>
          </li>
          <li className={styles['ticket__item-list']}>
            <p className={classNameLightPar}>В пути</p>
            <p className={classNameDarkPar}>{secondDuration}</p>
          </li>
        </ul>

        <ul className={styles['ticket__content']}>
          {isFirstGroupStops ? (
            <li className={styles['ticket__item-list']}>
              <p className={classNameLightPar}>
                {firstGroupStops.stopsCount} пересадки
              </p>
              <p className={classNameDarkPar}>
                {firstGroupStops.stops}
              </p>
            </li>
          ) : (
            <li className={styles['ticket__item-list']}>
              <p className={classNameLightPar}>Без пересадок</p>
            </li>
          )}

          {isSecondGroupStops ? (
            <li className={styles['ticket__item-list']}>
              <p className={classNameLightPar}>
                {secondGroupStops.stopsCount} пересадки
              </p>
              <p className={classNameDarkPar}>
                {secondGroupStops.stops}
              </p>
            </li>
          ) : (
            <li className={styles['ticket__item-list']}>
              <p className={classNameLightPar}>Без пересадок</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Ticket;
