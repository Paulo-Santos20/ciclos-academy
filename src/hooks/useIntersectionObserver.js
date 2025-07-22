// hooks/useIntersectionObserver.js
import { useState, useEffect, useRef, useCallback } from 'react';

const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const elementRef = useRef(null);
  const observerRef = useRef(null);

  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '50px',
    triggerOnce: true, // Importante: só dispara uma vez
    ...options
  };

  const setRef = useCallback((node) => {
    if (elementRef.current) {
      // Limpa o observer anterior
      if (observerRef.current) {
        observerRef.current.unobserve(elementRef.current);
      }
    }

    if (node) {
      elementRef.current = node;
      
      // Cria novo observer apenas se necessário
      if (!hasBeenVisible && 'IntersectionObserver' in window) {
        observerRef.current = new IntersectionObserver(
          ([entry]) => {
            const isElementVisible = entry.isIntersecting;
            setIsVisible(isElementVisible);
            
            if (isElementVisible && defaultOptions.triggerOnce) {
              setHasBeenVisible(true);
              // Desconecta o observer após primeira visualização
              observerRef.current?.disconnect();
            }
          },
          defaultOptions
        );

        observerRef.current.observe(node);
      }
    }
  }, [hasBeenVisible, defaultOptions.threshold, defaultOptions.rootMargin]);

  useEffect(() => {
    return () => {
      // Cleanup
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Retorna true se já foi visto ou está visível
  return [setRef, hasBeenVisible || isVisible];
};

export default useIntersectionObserver;