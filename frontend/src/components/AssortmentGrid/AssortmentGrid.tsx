import React, { useCallback, useEffect, useState } from 'react';
import styles from './AssortmentGrid.module.scss';
import { AssortmentCard } from './AssortmentCard';
import { useLazyQuery } from '@apollo/client';
import AssortmentFilters from '../AssortmentFilters/AssortmentFilters';
import { GET_CATEGORY, GetCategoryResponseType, GetCategoryVariablesType } from '@/graphql/queries/getCategory';
import { useStore } from '@/store';
import { useFiltersStore } from '@/store/filters';
import { useLazyLoading } from '@/common/hooks/useLazyLoading';
import { AssortmentCartSkeleton } from './AssortmentCartSkeleton';

const LOAD_LIMIT = 9;

export const AssortmentGrid = () => {
  const [getCategoryData] = useLazyQuery<GetCategoryResponseType, GetCategoryVariablesType>(GET_CATEGORY);
  const categoryId = useStore((state) => state.selectedCategory);
  const setProducts = useStore(state => state.setProducts); 
  const products = useStore(state => state.products);
  const currentSorting = useFiltersStore((state) => state.sorting);
  const [hasNext, setHasNext] = useState(categoryId && products[categoryId] ? products[categoryId].hasNext : true);
  const [after, setAfter] = useState(categoryId && products[categoryId] ? products[categoryId].after : 0);

  const handleGetProducts = useCallback(async () => {
    if (!categoryId) return;
    try {
      const { data } = await getCategoryData({
        variables: {
          categoryId,
          sorting: currentSorting,
          offset: after,
          limit: LOAD_LIMIT,
        }
      });
      if (!data) throw new Error('Unable to get products for category: ' + categoryId);
      setProducts({
        categoryId,
        products: data.category.products.edges,
        after: data.category.products.after,
        totalCount: data.category.products.totalCount,
        hasNext: data.category.products.hasNext,
      });
      setAfter(data.category.products.after);
      setHasNext(data.category.products.hasNext);
    } catch (error) {
      console.error(error);
    }
  }, [categoryId, currentSorting, after]);

  const { triggerRef } = useLazyLoading({ onNeedData: handleGetProducts });

  const getSceleton = () => {
    return Array.from({ length: LOAD_LIMIT - 1 }).map(() => <AssortmentCartSkeleton key={crypto.randomUUID()}/>);
  };

  const getLoadAnchor = () => {
    return <div ref={triggerRef}>
      <AssortmentCartSkeleton />
    </div>;
  };

  const renderLoadingScreen = () => {
    return (
      <>
        {getLoadAnchor()}
        {getSceleton()}
      </>
    );
  };
  
  const handleResetList = () => {
    if (!categoryId) return;
    if (!products[categoryId]) {
      setAfter(0);
      setHasNext(true);
      return;
    }
    setAfter(products[categoryId].after);
    setHasNext(products[categoryId].hasNext);
  };

  useEffect(() => {
    handleResetList();
  }, [categoryId, currentSorting]);


  if (!categoryId) return null;

  return (
    <div className={styles.root}>
      <AssortmentFilters />
      <div className={styles.assortment}>
        {
          (products[categoryId]?.edges || []).map(el => <AssortmentCard item={el} key={el.id + el.categoryId}/>)
        }
        {hasNext && renderLoadingScreen()}
      </div>
    </div>
  );
};
