import React from 'react';
import styles from './CategoriesList.module.scss';
import { categoriesList } from '../../mock/categories';
import { CategoriesListItem } from './components/CategoriesListItem';

export const CategoriesList = () => {
  return (
    <div className={styles.root}>
      {
        categoriesList.map(el => <CategoriesListItem item={el} key={el.id}/>)
      }
    </div>
  );
};
