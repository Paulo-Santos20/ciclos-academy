import React from "react";
import "./Price.css";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "Básico",
    price: "89,90",
    period: "/mês",
    features: [
      "Acesso à musculação",
      "Horário das 6h às 22h",
      "Avaliação física mensal",
      "Sem taxa de matrícula"
    ],
    buttonText: "Assinar Agora",
    buttonLink: "/assinar/basico",
    highlight: false
  },
  {
    name: "Premium",
    price: "119,90",
    period: "/mês",
    features: [
      "Acesso completo à academia",
      "Todas as atividades incluídas",
      "Acesso a todas as unidades",
      "Avaliação física semanal",
      "Sem taxa de matrícula",
      "Estacionamento gratuito"
    ],
    buttonText: "Assinar Agora",
    buttonLink: "/assinar/premium",
    highlight: true
  },
  {
    name: "Família",
    price: "199,90",
    period: "/mês",
    features: [
      "Plano para até 3 pessoas",
      "Acesso completo à academia",
      "Todas as atividades incluídas",
      "Avaliação física mensal",
      "Sem taxa de matrícula"
    ],
    buttonText: "Assinar Agora",
    buttonLink: "/assinar/familia",
    highlight: false
  }
];

const Price = () => {
  return (
    <section className="pricing-section-container">
      <div className="pricing-section">
        <div className="pricing-header">
          <h2 className="pricing-title">Nossos Planos</h2>
          <p className="pricing-subtitle">
            Escolha o plano que melhor se adapta às suas necessidades e comece sua jornada de transformação hoje mesmo.
          </p>
        </div>
        
        <div className="pricing-plans">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-plan ${plan.highlight ? 'pricing-plan-highlight' : ''}`}
            >
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="currency">R$</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
              </div>
              
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="plan-feature-item">
                    <FaCheck className="feature-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a href={plan.buttonLink} className="plan-button">
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price;