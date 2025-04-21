import React, { useState, useEffect, useRef } from "react";
import "./Activity.css";
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";

// Importando imagens reais (você precisará ter essas imagens na pasta assets)
import musculacaoImg from "../../assets/img/musculacao.jpg";
import funcionalImg from "../../assets/img/funcional.jpg";
import jumpImg from "../../assets/img/jump.jpg";
import dancaImg from "../../assets/img/danca.jpg";
import pilatesImg from "../../assets/img/pilates.jpg";

const activities = [
  { 
    name: "Musculação", 
    link: "/musculacao",
    image: musculacaoImg
  },
  { 
    name: "Funcional", 
    link: "/funcional",
    image: funcionalImg
  },
  { 
    name: "Jump", 
    link: "/jump",
    image: jumpImg
  },
  { 
    name: "Dança", 
    link: "/danca",
    image: dancaImg
  },
  { 
    name: "Pilates", 
    link: "/pilates",
    image: pilatesImg
  },
];

const Activity = () => {
  // Duplicamos o array para criar uma rolagem infinita
  const allActivities = [...activities, ...activities, ...activities];
  const [currentIndex, setCurrentIndex] = useState(activities.length); // Começamos a partir do meio
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);
  const visibleCards = 3.5; // Número de cartões visíveis ao mesmo tempo (3 cartões e meio)

  // Navegação manual
  const goToPrevious = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(prevIndex => prevIndex - 1);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(prevIndex => prevIndex + 1);
  };

  // Reposicionamento para criar efeito infinito
  useEffect(() => {
    if (currentIndex <= 0) {
      // Se chegar no início, pula para o meio instantaneamente
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(activities.length);
      }, 500); // Tempo da transição para coincidir com CSS
      return () => clearTimeout(timeout);
    }
    
    if (currentIndex >= allActivities.length - visibleCards) {
      // Se chegar no final, pula para o meio instantaneamente
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(activities.length);
      }, 500); // Tempo da transição para coincidir com CSS
      return () => clearTimeout(timeout);
    }
    
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
    
    return () => clearTimeout(timeout);
  }, [currentIndex, activities.length, allActivities.length, visibleCards]);

  // Configuração do auto-play
  useEffect(() => {
    autoPlayRef.current = goToNext;
  }, []);

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const interval = setInterval(play, 5000);
    return () => clearInterval(interval);
  }, []);

  // Manipuladores de eventos de toque para dispositivos móveis
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Deslizar para a esquerda
      goToNext();
    }

    if (touchStart - touchEnd < -50) {
      // Deslizar para a direita
      goToPrevious();
    }
  };

  return (
    <section className="activity-section-container">
      <div className="activity-section">
        <div className="activity-header">
          <div className="activity-header-content">
            <h2 className="activity-title">Nossos Serviços</h2>
            <p className="activity-subtitle">
              Oferecemos uma variedade de atividades para todos os objetivos e níveis de condicionamento físico. 
              Conheça nossas modalidades e escolha a que melhor se adapta ao seu estilo de vida.
            </p>
          </div>
          
          <div className="carousel-controls">
            <button className="carousel-btn prev-btn" onClick={goToPrevious}>
              <FaChevronLeft />
            </button>
            <button className="carousel-btn next-btn" onClick={goToNext}>
              <FaChevronRight />
            </button>
          </div>
        </div>
        
        <div 
          className="carousel-container"
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="carousel-track" 
            style={{ 
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
            }}
          >
            {allActivities.map((item, index) => (
              <div key={index} className="activity-card-wrapper">
                <div className="activity-card">
                  <div className="activity-image-container">
                    <img src={item.image} alt={item.name} className="activity-image" />
                    <div className="activity-overlay">
                      <h3 className="activity-name">{item.name}</h3>
                    </div>
                    <a href={item.link} className="activity-link">
                      <span className="arrow-icon">
                        <FaArrowRight />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activity;