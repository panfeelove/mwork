import React from 'react';
import styles from './SohoApp.module.scss';
import { Header } from '../Header';

export const SohoApp = () => {
  return (
    <div className={styles.root}>
      <Header />
    </div>
  );
};
