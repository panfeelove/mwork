import React, { useEffect, useMemo, useState } from 'react';
import styles from './Carousel.module.scss';
import cn from 'classnames';

export type CarouselSlideType = {
  src: string;
}

interface ICarouselProps {
  slides: CarouselSlideType[];
}

const getNextIndex = (slides: CarouselSlideType[], currentIndex: number) => {
  console.log('asldklsak', currentIndex);
  
  if (slides[currentIndex + 1]) return currentIndex + 1;
  return 0;
};

const Carousel = ({ slides }: ICarouselProps) => {
  const [index, setIndex] = useState(0);
  const [isAnimation, setIsAnimation] = useState(false);

  const nextIndex = useMemo(() => {
    return getNextIndex(slides, index);
  }, [slides, index]);
  
  const handleNext = () => {
    setIsAnimation(true);
    setTimeout(() => {
      setIndex(getNextIndex(slides, index));
      setIsAnimation(false);
      //   console.log('HERE', getNextIndex(slides, index));
    }, 600);
  };

  useEffect(() => {
    const iId = setInterval(() => handleNext(), 2000);
    return () => clearInterval(iId);
  }, [index]);

  useEffect(() => {
    console.log({ index, nextIndex });
    
  }, [index, nextIndex]);

  return (
    <div className={styles.root}>
      <div className={cn(styles.imageWrapper)}>
        <img src={slides[index].src} alt={slides[index].src} className={cn(styles.image, { [styles.swipe]: isAnimation })}/>
        {/* <img src={slides[nextIndex].src} alt={slides[nextIndex].src} className={cn(styles.image)}/> */}
      </div>
    </div>
  );
};

export default Carousel;
