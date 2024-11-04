import React, { useCallback, useEffect } from 'react';
import styles from './AssortmentGrid.module.scss';
import { AssortmentCard } from './AssortmentCard';
import { useLazyQuery } from '@apollo/client';
import { GET_CATEGORY, GetCategoryResponseType, GetCategoryVariablesType } from 'src/graphql/queries/getCategory';
import { useStore } from 'src/store';

export const AssortmentGrid = () => {
  const [getCategoryData] = useLazyQuery<GetCategoryResponseType, GetCategoryVariablesType>(GET_CATEGORY);
  const categoryId = useStore((state) => state.selectedCategory);
  const setProducts = useStore(state => state.setProducts);
  const products = useStore(state => state.products);

  const handleGetProducts = useCallback(async () => {
    if (!categoryId) return;
    try {
      const { data } = await getCategoryData({
        variables: {
          categoryId,
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
  }, [categoryId]);

  useEffect(() => {
    handleGetProducts();
  }, [categoryId]);

  if (!categoryId) return null;

  return (
    <div className={styles.root}>
      {
        (products[categoryId] || []).map(el => <AssortmentCard item={el} key={el.id}/>)
      }
    </div>
  );
};
