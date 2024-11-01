import React, { useEffect, useState } from 'react';

export const useLoadedImage = (src: string): [string | null, boolean] => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  useEffect(() => {
    const hanldeLoadImage = async () => {
      const img = new Image();
      img.onload = () => {
        setIsLoading(false);
        setImageSrc(src);
      };
      img.src = src;
    };

    hanldeLoadImage();
  }, []);

  return [imageSrc, isLoading];
};