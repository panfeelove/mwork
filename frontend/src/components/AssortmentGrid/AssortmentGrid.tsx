import React from 'react';
import styles from './AssortmentGrid.module.scss';
import { assortmentList } from '../../mock/assortment';
import { AssortmentCard } from './AssortmentCard';


export const AssortmentGrid = () => {
  return (
    <div className={styles.root}>
      {
        assortmentList.map(el => <AssortmentCard item={el} key={el.id}/>)
      }
    </div>
  );
};
