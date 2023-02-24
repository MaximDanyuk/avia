/*eslint-disable */

import React from 'react';

import MainFilter from '../MainFilter/MainFilter';
import SideFilter from '../SideFilter/SideFilter';
import TicketsList from '../TicketsList/TicketsList';
import styles from './Main.module.scss';

const Main: React.FC = () => {
  return (
    <main className={styles['main']}>
      <SideFilter />
      <MainFilter />
      <TicketsList />
    </main>
  );
};

export default Main;
