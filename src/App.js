import React, { Suspense, lazy } from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import LoadingFallback from './components/commom/LoadingFallback';
import useIntersectionObserver from './hooks/useIntersectionObserver';

// Lazy loading apenas dos componentes pesados
const Activity = lazy(() => import('./components/Activity/Activity'));
const Offer = lazy(() => import('./components/Offer/Offer'));
const Price = lazy(() => import('./components/Price/Price'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Location = lazy(() => import('./components/Location/Location'));
const Footer = lazy(() => import('./components/Footer/Footer'));

function App() {
  // Observadores simplificados - apenas um por seção
  const [activityRef, activityVisible] = useIntersectionObserver({ 
    threshold: 0.1,
    rootMargin: '100px' // Carrega antes de aparecer na tela
  });
  
  const [offerRef, offerVisible] = useIntersectionObserver({ 
    threshold: 0.1,
    rootMargin: '100px'
  });
  
  const [priceRef, priceVisible] = useIntersectionObserver({ 
    threshold: 0.1,
    rootMargin: '100px'
  });

  return (
    <div className="app-container">
      {/* Componentes críticos - carregamento imediato */}
      <Header />
      <Banner />
      
      {/* Componentes com lazy loading otimizado */}
      <div ref={activityRef}>
        <Suspense fallback={<LoadingFallback />}>
          {activityVisible && <Activity />}
        </Suspense>
      </div>
      
      <div ref={offerRef}>
        <Suspense fallback={<LoadingFallback />}>
          {offerVisible && <Offer />}
        </Suspense>
      </div>
      
      <div ref={priceRef}>
        <Suspense fallback={<LoadingFallback />}>
          {priceVisible && <Price />}
        </Suspense>
      </div>
      
      {/* Componentes finais - carregamento direto */}
      <Suspense fallback={<LoadingFallback />}>
        <Contact />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <Location />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;