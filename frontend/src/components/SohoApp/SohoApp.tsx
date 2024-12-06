import React from 'react';
import styles from './SohoApp.module.scss';
import { Header } from '../Header';
import { SohoAssortmentView } from '../SohoAssortmentView';
import AppLoaderScreen from '../AppLoaderScreen/AppLoaderScreen';
import { useReady } from '@/common/hooks/useReady';

export const SohoApp = () => {
  const [isAppReady] = useReady();
  return (
    <div className={styles.root}>
      
      {
        isAppReady ? (
          <>
            <Header />
            <SohoAssortmentView />
          </>
        ) : (
          <AppLoaderScreen />
        )
      }
    </div>
  );
};
