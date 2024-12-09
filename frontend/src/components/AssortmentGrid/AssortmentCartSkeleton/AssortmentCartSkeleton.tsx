import React from 'react';
import styles from './AssortmentCartSkeleton.module.scss';

export const AssortmentCartSkeleton = () => {
  return (
    <div className={styles.root}>
      <span className={styles.top}/>
      <span className={styles.down}/>
    </div>
  );
};

