import React from 'react';
import styles from './SohoAssortmentView.module.scss';
import { CategoriesList } from '../CategoriesList';
import { AssortmentGrid } from '../AssortmentGrid';
import { useStore } from 'src/store';
import imageSrc from '../../static/currentCollection.jpg';
import { useLoadedImage } from 'src/common/hooks/useLodedImage';



export const SohoAssortmentView = () => {
  const categories = useStore((state) => state.categories);
  const [src] = useLoadedImage(imageSrc);

  return (
    <div className={styles.root}>
      <div className={styles.wideImage}>
        {
          src && <img src={src} alt="" />
        }
      </div>
      {
        categories && (
          <div className={styles.contentContainer}>
            <CategoriesList />
            <AssortmentGrid />
          </div>
        )
      }
    </div>
  );
};
