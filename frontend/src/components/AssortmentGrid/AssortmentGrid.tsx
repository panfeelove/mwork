import React from 'react';
import styles from './AssortmentGrid.module.scss';
import { AssortmentCard } from './AssortmentCard';
import { ProductDataType } from 'src/common/types';

export const AssortmentGrid = () => {
  return (
    <div className={styles.root}>
      {
        ([] as ProductDataType[]).map(el => <AssortmentCard item={el} key={el.id}/>)
      }
    </div>
  );
};
