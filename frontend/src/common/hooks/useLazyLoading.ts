import { useCallback, useEffect, useRef, useState } from 'react';

interface IUseLazyLoading {
  onNeedData: () => Promise<any> | void;
}

export const useLazyLoading = ({
  onNeedData,
}: IUseLazyLoading) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const [isElementInView, setIsElementInView] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isLoadingRef = useRef(isLoading);

  const observationElementRef = useCallback((node: any) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting) {
        setIsElementInView(true);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  const loadData = async () => {
    isLoadingRef.current = true;
    setIsLoading(true);
    await onNeedData();
    setIsLoading(false);
    isLoadingRef.current = false;
    setIsElementInView(false);
  };

  useEffect(() => {
    if ((isElementInView && !isLoadingRef.current)) {
      loadData();
    }

  }, [isElementInView]);

  const reset = () => {
    setIsElementInView(false);
    isLoadingRef.current = false;
  };

  return {
    triggerRef: observationElementRef,
    isLoading,
    isTriggerInView: isElementInView,
    observer,
    reset,
  };
};