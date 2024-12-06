import React from 'react';
import styles from './SohoAssortmentView.module.scss';
import { CategoriesList } from '../CategoriesList';
import { AssortmentGrid } from '../AssortmentGrid';
import HotOffers from '../HotOffers/HotOffers';
import { useStore } from '@/store';



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
