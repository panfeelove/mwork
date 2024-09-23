import React from 'react';
import styles from './SohoApp.module.scss';
import { Header } from '../Header';
import { AssortmentGrid } from '../AssortmentGrid';

export const SohoApp = () => {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.contentContainer}>
        <AssortmentGrid />
      </div>
    </div>
  );
};
