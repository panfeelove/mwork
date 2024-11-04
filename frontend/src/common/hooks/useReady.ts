import { useLazyQuery } from '@apollo/client';
import React, { useCallback, useEffect, useState } from 'react';
import { GET_CATEGORIES, GetCategoriesResponseType } from 'src/graphql/queries/getCategories';
import { useStore } from 'src/store';

export const useReady = () => {
  const [isReady, setIsReady] = useState(false);
  const [getCategoriesList] = useLazyQuery<GetCategoriesResponseType>(GET_CATEGORIES);
  const setCategories = useStore((state) => state.setCategories);
  const setSelectedCategory = useStore((state) => state.setSelectedCategory);
  
  const loadCategories = useCallback(async () => {
    try {
      const { data } = await getCategoriesList();
      if (!data) throw new Error('Cannot load categories.');
      setCategories(data.categories);
      if (data.categories.length) {
        setSelectedCategory(data.categories[0].id);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);
  
  useEffect(() => {
    const handleInitialLoading = async () => {
      await Promise.all([
        loadCategories()
      ]);

      setIsReady(true);
    };
    handleInitialLoading();
  }, []);

  return [isReady];
};