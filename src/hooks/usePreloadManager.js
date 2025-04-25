// src/hooks/usePreloadManager.js
import { useEffect } from 'react';

const usePreloadManager = (componentsToPreload = []) => {
  useEffect(() => {
    if (!componentsToPreload.length) return;

    let mounted = true;
    let preloadTimeout = null;
    let idleCallbackId = null;

    // Função para pré-carregar componentes sequencialmente
    const preloadSequentially = async (startIndex = 0) => {
      if (!mounted || startIndex >= componentsToPreload.length) return;

      try {
        await componentsToPreload[startIndex]();
        
        if (mounted && startIndex < componentsToPreload.length - 1) {
          preloadTimeout = setTimeout(() => {
            preloadSequentially(startIndex + 1);
          }, 300);
        }
      } catch (error) {
        console.error('Erro ao pré-carregar componente:', error);
      }
    };

    // Inicia pré-carregamento quando o navegador estiver ocioso
    const startPreloading = () => {
      if ('requestIdleCallback' in window) {
        idleCallbackId = window.requestIdleCallback(() => {
          preloadSequentially(0);
        }, { timeout: 2000 });
      } else {
        // Fallback: inicia após um delay
        preloadTimeout = setTimeout(() => {
          preloadSequentially(0);
        }, 2000);
      }
    };

    // Verifica se a página já carregou completamente
    if (document.readyState === 'complete') {
      startPreloading();
    } else {
      // Caso contrário, aguarda o evento load
      window.addEventListener('load', startPreloading);
    }

    // Limpeza
    return () => {
      mounted = false;
      clearTimeout(preloadTimeout);
      
      if (idleCallbackId && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleCallbackId);
      }
      
      window.removeEventListener('load', startPreloading);
    };
  }, [componentsToPreload]);
};

export default usePreloadManager;