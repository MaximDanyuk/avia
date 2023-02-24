/*eslint-disable */

import React from 'react';
import logo from '../../images/Logo.svg';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles['header']}>
      <div className={styles['header__image-wrapper']}>
        <img
          className={styles['header__image']}
          src={logo}
          alt="Логотип авиасейлз"
        />
      </div>
    </div>
  );
};

export default Header;
