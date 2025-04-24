import React, { useState } from "react";
import "./Offer.css";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

// Importe a imagem da academia
import academiaImg from "../../assets/img/academia.png";

const offers = [
  {
    name: "Climatizado",
    description: "Todos os ambientes são climatizados com ar-condicionado.",
  },
  {
    name: "Equipamentos",
    description: "Equipamentos novos e modernos em todas as atividades.",
  },
  {
    name: "Horário Gigante",
    description: "Mais de 16 horas de funcionamento diário*. Segunda à sexta.",
  },
  {
    name: "Facilidade",
    description: "Cobrança recorrente no cartão sem comprometer seu limite.",
  },
];

const Offer = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="offer-section-container">
      <div className="offer-section">
        <div className="offer-content">
          <h2 className="offer-category">Estrutura Premium</h2>
          
          <p className="offer-description-text">
            Aqui você encontrará não só uma academia de musculação com amplo espaço climatizado, 
            mas um centro completo de saúde e bem-estar, que integra várias atividades físicas 
            e esportivas para atender ao público de todas as idades.
          </p>
          
          <div className="offer-showcase">
            <div className="offer-image-container">
              <img src={academiaImg} alt="Academia" className="offer-image" />
            </div>
            
            <div className="offer-accordion-container">
              <ul className="offer-accordion">
                {offers.map((item, index) => (
                  <li key={index} className="offer-accordion-item">
                    <div 
                      className={`offer-accordion-header ${expandedItems[index] ? 'active' : ''}`}
                      onClick={() => toggleItem(index)}
                    >
                      <span className="offer-name">{item.name}</span>
                      <span className="offer-icon">
                        {expandedItems[index] ? 
                          <FaArrowDown className="arrow-diagonal-down" /> : 
                          <FaArrowUp className="arrow-diagonal-up" />
                        }
                      </span>
                    </div>
                    
                    {expandedItems[index] && (
                      <div className="offer-accordion-content">
                        {item.description}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;