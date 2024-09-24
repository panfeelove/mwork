import { ProductDataType } from '@/common/types';
import React from 'react';
import styles from './AssortmentCard.module.scss';
import { formatter } from '../../../common/utils/formatter';


interface IAssortmentCardProps {
  item: ProductDataType;
}

export const AssortmentCard = ({ item }: IAssortmentCardProps) => {
  return (
    <div className={styles.root}>
      <img src={item.imgUrl} alt={item.name} />
      <div className={styles.info}>
        <p className={styles.name}>{item.name}</p>
        <span className={styles.price}>{formatter.format(item.price)}</span>
      </div>
    </div>
  );
};
