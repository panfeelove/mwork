import React from 'react';
import Carousel from '../Carousel/Carousel';
import { withStaticUrl } from '@/common/utils/helpers';

const HotOffers = () => {
  return (
    <Carousel slides={[
      { src: withStaticUrl('1.jpg') },
      { src: withStaticUrl('2.jpg') },
      { src: withStaticUrl('3.jpg') },
    ]}/>
  );
};

export default HotOffers;
