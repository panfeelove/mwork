import React from 'react';
import styles from './SohoApp.module.scss';
import { Header } from '../Header';
import { SohoAssortmentView } from '../SohoAssortmentView';

export const SohoApp = () => {
  return (
    <div className={styles.root}>
      <Header />
      <SohoAssortmentView />
    </div>
  );
};
