import React from 'react';
import { withStaticUrl } from 'src/common/utils/helpers';
import Carousel from '../Carousel/Carousel';

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
