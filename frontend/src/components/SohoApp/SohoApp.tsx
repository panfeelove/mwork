import React, { useEffect } from 'react';
import styles from './SohoApp.module.scss';
import { Header } from '../Header';
import { SohoAssortmentView } from '../SohoAssortmentView';
import { useLazyQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../graphql/queries/getProducts';

export const SohoApp = () => {
  const [getProducts] = useLazyQuery(GET_PRODUCTS);

  useEffect(() => {
    (async () => {
      const { data } = await getProducts();
      console.log({ data });
      
    })();
  }, []);

  return (
    <div className={styles.root}>
      <Header />
      <SohoAssortmentView />
    </div>
  );
};
