import React from 'react';
import styles from './AssortmentFilters.module.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { SORTING_DIRECTIONS, SortModel } from 'src/common/types';
import { useFiltersStore } from 'src/store/filters';
import cn from 'classnames';
import SortIcon from '@mui/icons-material/Sort';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const sortingStateOrder = [SORTING_DIRECTIONS.ASC, SORTING_DIRECTIONS.DESC, null];

const getNextSorting = (currentSorting: SORTING_DIRECTIONS | null) => {
  if (currentSorting === null) {
    return sortingStateOrder[0];
  }
  const index = sortingStateOrder.indexOf(currentSorting);
  return sortingStateOrder[index + 1];
};

const AssortmentFilters = () => {
  const currentSorting = useFiltersStore((state) => state.sorting);
  const setSorting = useFiltersStore((state) => state.setSorting);

  const handleSort = (field: SortModel['field']) => {
    const nextSort = getNextSorting(currentSorting?.direction || null);
    setSorting(nextSort ? { field, direction: nextSort } : null);
  };

  const getSortingIcon = (field: string) => {
    if (currentSorting?.field === field && currentSorting.direction) {
      if (currentSorting.direction === SORTING_DIRECTIONS.ASC) {
        return <KeyboardArrowUpIcon />;
      }

      if (currentSorting.direction === SORTING_DIRECTIONS.DESC) {
        return <KeyboardArrowDownIcon />;
      }
    }
    return <SortIcon />;
  };

  return (
    <div className={styles.root}>
      <span className={cn(styles.filter, styles.priceFilter)} onClick={() => handleSort('price')}>
        Price {getSortingIcon('price')}
      </span>
    </div>
  );
};

export default AssortmentFilters;
