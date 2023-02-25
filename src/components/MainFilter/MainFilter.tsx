/*eslint-disable */

import React, { MouseEvent } from 'react';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import styles from './MainFilter.module.scss';

const MainFilter: React.FC = () => {
  const quality = useTypedSelector((state) => state.mainFilter);
  const { mainFilterCreator } = useAction();
  const handleFixSorting = (evt: MouseEvent<HTMLInputElement>) => {
    mainFilterCreator(evt.currentTarget.value);
  };

  return (
    <form className={styles['main-filter']}>
      <fieldset className={styles['main-filter__input-container']}>
        <label className={styles['main-filter__label']}>
          <input
            className={styles['main-filter__item']}
            defaultChecked
            type="radio"
            name="flyParams"
            value="Самый дешевый"
            onClick={handleFixSorting}
          />
          <span className={styles['main-filter__pseudo-item']}>
            Самый дешевый
          </span>
        </label>
        <label className={styles['main-filter__label']}>
          <input
            className={styles['main-filter__item']}
            type="radio"
            name="flyParams"
            value="Самый быстрый"
            onClick={handleFixSorting}
          />
          <span className={styles['main-filter__pseudo-item']}>
            Самый быстрый
          </span>
        </label>
      </fieldset>
    </form>
  );
};

export default MainFilter;
