import React from 'react';
import Carousel from '../Carousel/Carousel';
import { withStaticUrl } from '@/common/utils/helpers';
import styles from './HotOffers.module.scss';

const HotOffers = () => {
  return (
    <div className={styles.wideImage}>
      <img src={withStaticUrl('3.webp')} loading='lazy' />
    </div>
  );
};

export default HotOffers;
