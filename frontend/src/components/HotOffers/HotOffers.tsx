import React from 'react';
import styles from './HotOffers.module.scss';
import { useLoadedImage } from 'src/common/hooks/useLodedImage';
import imageSrc from '../../static/currentCollection.jpg';

const HotOffers = () => {
  const [src] = useLoadedImage(imageSrc);
  
  return (
    <div className={styles.wideImage}>
      {
        src && <img src={src} alt="" />
      }
    </div>
  );
};

export default HotOffers;
