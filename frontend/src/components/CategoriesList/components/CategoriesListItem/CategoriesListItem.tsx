import { Category } from '../../../../common/types';
import React from 'react';
import styles from './CategoriesListItem.module.scss';
import { ButtonBase } from '../../../../common/components/ButtonBase';

interface ICategoriesListItemProps {
  item: Category;
}

export const CategoriesListItem = ({ item }: ICategoriesListItemProps) => {
  return (
    <ButtonBase className={styles.root}>{item.categoryName}</ButtonBase>
  );
};
