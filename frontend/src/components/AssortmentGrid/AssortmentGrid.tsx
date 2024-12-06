import React, { useCallback, useEffect } from 'react';
import styles from './AssortmentGrid.module.scss';
import { AssortmentCard } from './AssortmentCard';
import { useLazyQuery } from '@apollo/client';
import AssortmentFilters from '../AssortmentFilters/AssortmentFilters';
import { GET_CATEGORY, GetCategoryResponseType, GetCategoryVariablesType } from '@/graphql/queries/getCategory';
import { useStore } from '@/store';
import { useFiltersStore } from '@/store/filters';

export const AssortmentGrid = () => {
  const [getCategoryData] = useLazyQuery<GetCategoryResponseType, GetCategoryVariablesType>(GET_CATEGORY);
  const categoryId = useStore((state) => state.selectedCategory);
  const setProducts = useStore(state => state.setProducts);
  const products = useStore(state => state.products);
  const currentSorting = useFiltersStore((state) => state.sorting);

  const handleGetProducts = useCallback(async () => {
    if (!categoryId) return;
    try {
      const { data } = await getCategoryData({
        variables: {
          categoryId,
          sorting: currentSorting
        }
      });
      if (!data) throw new Error('Unable to get products for category: ' + categoryId);
      setProducts({
        categoryId,
        products: data.category.products,
      });
    } catch (error) {
      console.error(error);
    }
  }, [categoryId, currentSorting]);

  useEffect(() => {
    handleGetProducts();
  }, [categoryId, currentSorting]);

  if (!categoryId) return null;

  return (
    <div className={styles.root}>
      <AssortmentFilters />
      <div className={styles.assortment}>
        {
          (products[categoryId] || []).map(el => <AssortmentCard item={el} key={el.id}/>)
        }
      </div>
    </div>
  );
};
