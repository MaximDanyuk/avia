/*eslint-disable */

import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import styles from './App.module.scss';

const App: React.FC = () => {
  const classNameApp = [styles['page'], styles['root__page']].join(
    ' ',
  );
  return (
    <div className={classNameApp}>
      <Header />
      <Main />
    </div>
  );
};

export default App;
