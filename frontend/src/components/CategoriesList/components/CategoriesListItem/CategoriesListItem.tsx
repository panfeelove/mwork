import { Category } from '../../../../common/types';
import React from 'react';
import styles from './CategoriesListItem.module.scss';
import { ButtonBase } from '../../../../common/components/ButtonBase';
import cn from 'classnames';
import { useStore } from 'src/store';

interface ICategoriesListItemProps {
  item: Category;
}

export const CategoriesListItem = ({ item }: ICategoriesListItemProps) => {
  const currentCategory = useStore((state) => state.selectedCategory);
  const setCategory = useStore(state => state.setSelectedCategory);
  return (
    <ButtonBase 
      className={cn(styles.root, { [styles.selected]: currentCategory === item.id })}
      onClick={() => setCategory(item.id)}
    >
      {
        item.categoryName
      }
    </ButtonBase>
  );
};
