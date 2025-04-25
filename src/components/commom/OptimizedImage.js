// src/components/common/OptimizedImage.js
import React, { useState, useEffect } from 'react';
import '../../styles/optimized-image.css';

const OptimizedImage = ({ 
  src, 
  smallSrc, 
  alt, 
  className = '', 
  width, 
  height,
  placeholderColor = '#f0f0f0',
  ...props 
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');

  useEffect(() => {
    // Reset state quando a source mudar
    setLoaded(false);
    setError(false);
    
    const img = new Image();
    
    // Se temos uma versão menor, carregue-a primeiro
    if (smallSrc) {
      const smallImg = new Image();
      smallImg.src = smallSrc;
      smallImg.onload = () => {
        setCurrentSrc(smallSrc);
        
        // Depois carregue a versão de alta resolução
        img.src = src;
        img.onload = () => {
          setCurrentSrc(src);
          setLoaded(true);
        };
        img.onerror = () => {
          setError(true);
        };
      };
      smallImg.onerror = () => {
        // Se falhar a versão pequena, tente a versão completa
        img.src = src;
        img.onload = () => {
          setCurrentSrc(src);
          setLoaded(true);
        };
        img.onerror = () => {
          setError(true);
        };
      };
    } else {
      // Carregue diretamente a imagem completa se não tiver versão pequena
      img.src = src;
      img.onload = () => {
        setCurrentSrc(src);
        setLoaded(true);
      };
      img.onerror = () => {
        setError(true);
      };
    }

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, smallSrc]);

  // Gera um placeholder colorido enquanto a imagem carrega
  const placeholderStyle = {
    backgroundColor: placeholderColor,
    width: '100%',
    height: '100%',
    display: loaded ? 'none' : 'block'
  };

  return (
    <div className="optimized-image-container" style={{ width, height, position: 'relative' }}>
      {!loaded && <div style={placeholderStyle} />}
      
      {currentSrc && (
        <img
          src={currentSrc}
          alt={alt}
          className={`optimized-image ${className} ${loaded ? 'loaded' : 'loading'} ${error ? 'error' : ''}`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
          {...props}
        />
      )}
      
      {error && (
        <div className="image-error">
          <span>Erro ao carregar imagem</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;