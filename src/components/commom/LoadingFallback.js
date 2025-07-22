// components/common/LoadingFallback.js
import React from 'react';
import './LoadingFallback.css';

const LoadingFallback = ({ height = 200 }) => {
  return (
    <div 
      className="loading-fallback" 
      style={{ minHeight: `${height}px` }}
      aria-label="Carregando conteúdo"
    >
      <div className="loading-spinner">
        <div className="spinner"></div>
        <span>Carregando...</span>
      </div>
    </div>
  );
};

export default LoadingFallback;