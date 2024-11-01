import React from 'react';
import styles from './AppLoaderScreen.module.scss';

const AppLoaderScreen = () => {
  return (
    <div className={styles.root}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default AppLoaderScreen;
