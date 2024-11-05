import React from 'react';
import styles from './AssortmentCard.module.scss';
import { formatter } from '../../../common/utils/formatter';
import { ProductDataType } from 'src/common/types';


interface IAssortmentCardProps {
  item: ProductDataType;
}

export const AssortmentCard = ({ item }: IAssortmentCardProps) => {
  return (
    <div className={styles.root}>
      <img className={styles.image} src={item.imageUrl} alt={item.name} />
      <div>
        <div className={styles.info}>
          <p className={styles.name}>{item.name}</p>
          <span className={styles.price}>{formatter.format(item.price)}</span>
        </div>
      </div>
    </div>
  );
};
