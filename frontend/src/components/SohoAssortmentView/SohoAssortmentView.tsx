import React from 'react';
import styles from './SohoAssortmentView.module.scss';
import { CategoriesList } from '../CategoriesList';
import { AssortmentGrid } from '../AssortmentGrid';
import { useStore } from 'src/store';
import HotOffers from '../HotOffers/HotOffers';



export const SohoAssortmentView = () => {
  const categories = useStore((state) => state.categories);
  return (
    <div className={styles.root}>
      <HotOffers />
      {
        categories && (
          <div className={styles.contentContainer}>
            <CategoriesList />
            <AssortmentGrid />
          </div>
        )
      }
    </div>
  );
};
