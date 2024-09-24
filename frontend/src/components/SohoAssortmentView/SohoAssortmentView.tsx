import React from 'react';
import styles from './SohoAssortmentView.module.scss';
import { CategoriesList } from '../CategoriesList';
import { AssortmentGrid } from '../AssortmentGrid';

export const SohoAssortmentView = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wideImage}>
        {
          // [TODO]: add image
        }
      </div>
      <div className={styles.contentContainer}>
        <CategoriesList />
        <AssortmentGrid />
      </div>
    </div>
  );
};
