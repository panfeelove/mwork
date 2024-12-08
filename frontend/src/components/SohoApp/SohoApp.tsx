import React from 'react';
import styles from './SohoApp.module.scss';
import AppLoaderScreen from '../AppLoaderScreen/AppLoaderScreen';
import { useReady } from '@/common/hooks/useReady';

const Header = React.lazy(() => import('../Header'));
const SohoAssortmentView = React.lazy(() => import('../SohoAssortmentView'));

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
