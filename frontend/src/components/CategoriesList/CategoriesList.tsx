import React from 'react';
import styles from './CategoriesList.module.scss';
import { CategoriesListItem } from './components/CategoriesListItem';
import { useStore } from '@/store';

export const CategoriesList = () => {
  const categories = useStore((state) => state.categories);
  return (
    <div className={styles.root}>
      {
        categories.map(el => <CategoriesListItem item={el} key={el.id}/>)
      }
    </div>
  );
};
