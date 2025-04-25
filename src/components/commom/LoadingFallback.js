// src/components/common/LoadingFallback.js
import React from 'react';
import '../../styles/loading.css';

const LoadingFallback = ({ height = 300, type = 'default' }) => {
  return (
    <div 
      className={`loading-skeleton loading-skeleton-${type}`} 
      style={{ height: `${height}px` }}
      aria-busy="true"
      aria-live="polite"
    >
      <div className="loading-pulse"></div>
      <div className="skeleton-text">Carregando conteúdo...</div>
    </div>
  );
};

export default LoadingFallback;