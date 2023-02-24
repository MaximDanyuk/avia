/*eslint-disable */
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import React, { useState, useEffect } from 'react';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import styles from './SideFilter.module.scss';
const CheckboxGroup = Checkbox.Group;

const plainOptions = [
  'Без пересадок',
  '1 пересадка',
  '2 пересадки',
  '3 пересадки',
];

const SideFilter: React.FC = () => {
  const { quantity, checkAll, indeterminate } = useTypedSelector(
    (state) => state.sideFilter,
  );
  const { sideFilterCreator } = useAction();

  useEffect(() => {
    sideFilterCreator(
      ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'],
      true,
      false,
    );
  }, []);

  const onChange = (list: (string | number | boolean)[]) => {
    sideFilterCreator(
      list,
      list.length === plainOptions.length,
      !!list.length && list.length < plainOptions.length,
    );
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    sideFilterCreator(
      e.target.checked ? plainOptions : [],
      e.target.checked,
      false,
    );
  };

  return (
    <div className={styles['side-filter']}>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Все
      </Checkbox>
      <CheckboxGroup
        options={plainOptions}
        value={quantity}
        onChange={onChange}
        className={styles['side-filter__list']}
      />
    </div>
  );
};

export default SideFilter;
