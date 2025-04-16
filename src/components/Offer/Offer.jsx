import React from "react";
import "./Offer.css";

const offers = [
  {
    name: "Climatizado",
    icon: "❄️",
    description: "Todos os ambientes são climatizados com ar-condicionado.",
  },
  {
    name: "Equipamentos",
    icon: "🏋️‍♂️",
    description: "Equipamentos novos e modernos em todas as atividades.",
  },
  {
    name: "Horário Gigante",
    icon: "⏰",
    description: "Mais de 16 horas de funcionamento diário*. Segunda à sexta.",
  },
  {
    name: "Facilidade",
    icon: "💳",
    description: "Cobrança recorrente no cartão sem comprometer seu limite.",
  },
];

const Offer = () => (
  <section className="offer-section">
    <h2 className="offer-title">
      Aqui você encontrará não só uma academia de musculação com amplo espaço climatizado, mas um centro completo de saúde e bem-estar, que integra várias atividades físicas e esportivas para atender ao público de todas as idades.
    </h2>
    <div className="offer-row">
      {offers.map((item) => (
        <div key={item.name} className="offer-card">
          <span className="offer-icon">{item.icon}</span>
          <span className="offer-name">{item.name}</span>
          <span className="offer-description">{item.description}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Offer;