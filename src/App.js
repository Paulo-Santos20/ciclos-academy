import React, { Suspense, lazy, useEffect } from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import LoadingFallback from './components/commom/LoadingFallback';
import useIntersectionObserver from './hooks/useIntersectionObserver';
import usePreloadManager from './hooks/usePreloadManager';
import './styles/loading.css';

// Lazy loading dos componentes não-críticos
const Activity = lazy(() => import(/* webpackChunkName: "activity" */ './components/Activity/Activity'));
const Offer = lazy(() => import(/* webpackChunkName: "offer" */ './components/Offer/Offer'));
const Price = lazy(() => import(/* webpackChunkName: "price" */ './components/Price/Price'));
const Contact = lazy(() => import(/* webpackChunkName: "contact" */ './components/Contact/Contact'));
const Location = lazy(() => import(/* webpackChunkName: "location" */ './components/Location/Location'));
const Footer = lazy(() => import(/* webpackChunkName: "footer" */ './components/Footer/Footer'));

function App() {
  // Hook personalizado para pré-carregamento inteligente
  usePreloadManager([
    () => import('./components/Offer/Offer'),
    () => import('./components/Price/Price'),
    () => import('./components/Contact/Contact'),
    () => import('./components/Location/Location'),
    () => import('./components/Footer/Footer')
  ]);

  // Refs e estados para os observadores de interseção
  const [activityRef, activityVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [offerRef, offerVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [priceRef, priceVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [contactRef, contactVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [locationRef, locationVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [footerRef, footerVisible] = useIntersectionObserver({ threshold: 0.1 });

  // Efeito para monitorar a performance de carregamento
  useEffect(() => {
    if (window.performance) {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      
      console.log(`Tempo de carregamento da página: ${pageLoadTime}ms`);
      
      // Enviar métricas para análise (se necessário)
      if ('sendBeacon' in navigator) {
        const perfMetrics = {
          pageLoad: pageLoadTime,
          domReady: perfData.domComplete - perfData.domLoading,
          timeToFirstByte: perfData.responseStart - perfData.requestStart,
          url: window.location.href,
          timestamp: new Date().toISOString()
        };
        
        // Exemplo: navigator.sendBeacon('/analytics', JSON.stringify(perfMetrics));
      }
    }
  }, []);

  return (
    <div className="app-container">
      {/* Componentes críticos que carregam imediatamente */}
      <Header />
      <Banner />
      
      {/* Componentes com lazy loading e observadores de interseção */}
      <div ref={activityRef}>
        <Suspense fallback={<LoadingFallback height={400} type="activity" />}>
          {activityVisible || window.innerWidth < 768 ? <Activity /> : null}
        </Suspense>
      </div>
      
      <div ref={offerRef}>
        <Suspense fallback={<LoadingFallback height={350} type="offer" />}>
          {offerVisible || window.innerWidth < 768 ? <Offer /> : null}
        </Suspense>
      </div>
      
      <div ref={priceRef}>
        <Suspense fallback={<LoadingFallback height={300} type="price" />}>
          {priceVisible || window.innerWidth < 768 ? <Price /> : null}
        </Suspense>
      </div>
      
      <div ref={contactRef}>
        <Suspense fallback={<LoadingFallback height={280} type="contact" />}>
          {contactVisible || window.innerWidth < 768 ? <Contact /> : null}
        </Suspense>
      </div>
      
      <div ref={locationRef}>
        <Suspense fallback={<LoadingFallback height={400} type="location" />}>
          {locationVisible || window.innerWidth < 768 ? <Location /> : null}
        </Suspense>
      </div>
      
      <div ref={footerRef}>
        <Suspense fallback={<LoadingFallback height={250} type="footer" />}>
          {footerVisible || window.innerWidth < 768 ? <Footer /> : null}
        </Suspense>
      </div>
    </div>
  );
}

export default App;