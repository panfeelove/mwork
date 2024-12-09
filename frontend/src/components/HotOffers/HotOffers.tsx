import React from 'react';
import Carousel from '../Carousel/Carousel';
import { withStaticUrl } from '@/common/utils/helpers';
import styles from './HotOffers.module.scss';

const HotOffers = () => {
  return (
    <div className={styles.wideImage}>
      <img src={withStaticUrl('1.jpg')} alt="" />
    </div>
    // <Carousel slides={[
    //   { src: withStaticUrl('1.jpg') },
    //   { src: withStaticUrl('2.jpg') },
    //   { src: withStaticUrl('3.jpg') },
    // ]}/>
  );
};

export default HotOffers;
