// src/hooks/useIntersectionObserver.js
import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    
    if (!element || !window.IntersectionObserver) {
      setIsVisible(true);
      setHasBeenVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      const visible = entry.isIntersecting;
      setIsVisible(visible);
      
      if (visible && !hasBeenVisible) {
        setHasBeenVisible(true);
      }
    }, { 
      threshold: options.threshold || 0, 
      rootMargin: options.rootMargin || '0px' 
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options.threshold, options.rootMargin, hasBeenVisible]);

  return [ref, isVisible || hasBeenVisible, isVisible];
};

export default useIntersectionObserver;