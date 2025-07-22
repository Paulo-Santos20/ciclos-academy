import React, { useState } from 'react';
import './Activity.css';
import { 
  FaDumbbell, 
  FaRunning, 
  FaHeartbeat, 
  FaUsers, 
  FaClock, 
  FaFire,
  FaSwimmer,
  FaBiking,
  FaUserFriends,
  FaPlay,
  FaCalendarAlt
} from 'react-icons/fa';

const Activity = () => {
  const [activeCategory, setActiveCategory] = useState('todas');

  const activities = [
    {
      id: 1,
      name: 'Musculação',
      category: 'forca',
      description: 'Treinamento com pesos para ganho de massa muscular e força',
      duration: '60 min',
      intensity: 'Alta',
      participants: '1-2 pessoas',
      icon: <FaDumbbell />,
      image: '/api/placeholder/300/200',
      benefits: ['Ganho de massa muscular', 'Aumento da força', 'Melhora do metabolismo'],
      schedule: ['06:00 - 22:00', 'Segunda a Sábado']
    },
    {
      id: 2,
      name: 'Cardio HIIT',
      category: 'cardio',
      description: 'Treino intervalado de alta intensidade para queima de gordura',
      duration: '45 min',
      intensity: 'Muito Alta',
      participants: '8-12 pessoas',
      icon: <FaHeartbeat />,
      image: '/api/placeholder/300/200',
      benefits: ['Queima de gordura', 'Melhora cardiovascular', 'Aumento da resistência'],
      schedule: ['07:00', '18:00', '19:30']
    },
    {
      id: 3,
      name: 'Yoga',
      category: 'flexibilidade',
      description: 'Prática milenar para flexibilidade, equilíbrio e bem-estar',
      duration: '60 min',
      intensity: 'Baixa',
      participants: '10-15 pessoas',
      icon: <FaUsers />,
      image: '/api/placeholder/300/200',
      benefits: ['Aumento da flexibilidade', 'Redução do stress', 'Melhora do equilíbrio'],
      schedule: ['08:00', '17:00', '19:00']
    },
    {
      id: 4,
      name: 'Natação',
      category: 'cardio',
      description: 'Exercício completo que trabalha todo o corpo na água',
      duration: '50 min',
      intensity: 'Média',
      participants: '6-8 pessoas',
      icon: <FaSwimmer />,
      image: '/api/placeholder/300/200',
      benefits: ['Exercício completo', 'Baixo impacto', 'Fortalecimento geral'],
      schedule: ['06:30', '12:00', '18:30']
    },
    {
      id: 5,
      name: 'Spinning',
      category: 'cardio',
      description: 'Aula de ciclismo indoor com música motivadora',
      duration: '45 min',
      intensity: 'Alta',
      participants: '15-20 pessoas',
      icon: <FaBiking />,
      image: '/api/placeholder/300/200',
      benefits: ['Queima muitas calorias', 'Fortalece pernas', 'Melhora resistência'],
      schedule: ['07:30', '18:00', '19:30']
    },
    {
      id: 6,
      name: 'Crossfit',
      category: 'forca',
      description: 'Treinamento funcional de alta intensidade',
      duration: '60 min',
      intensity: 'Muito Alta',
      participants: '8-12 pessoas',
      icon: <FaFire />,
      image: '/api/placeholder/300/200',
      benefits: ['Condicionamento geral', 'Força funcional', 'Queima de gordura'],
      schedule: ['06:00', '17:00', '18:30']
    },
    {
      id: 7,
      name: 'Pilates',
      category: 'flexibilidade',
      description: 'Exercícios para fortalecimento do core e postura',
      duration: '55 min',
      intensity: 'Média',
      participants: '8-10 pessoas',
      icon: <FaUserFriends />,
      image: '/api/placeholder/300/200',
      benefits: ['Fortalece o core', 'Melhora postura', 'Aumenta flexibilidade'],
      schedule: ['08:30', '17:30', '19:00']
    },
    {
      id: 8,
      name: 'Corrida',
      category: 'cardio',
      description: 'Treinos de corrida em grupo com diferentes intensidades',
      duration: '40 min',
      intensity: 'Média',
      participants: '10-15 pessoas',
      icon: <FaRunning />,
      image: '/api/placeholder/300/200',
      benefits: ['Melhora cardiovascular', 'Queima calorias', 'Fortalece pernas'],
      schedule: ['06:30', '18:00']
    }
  ];

  const categories = [
    { id: 'todas', name: 'Todas as Atividades', icon: <FaUsers /> },
    { id: 'cardio', name: 'Cardio', icon: <FaHeartbeat /> },
    { id: 'forca', name: 'Força', icon: <FaDumbbell /> },
    { id: 'flexibilidade', name: 'Flexibilidade', icon: <FaUsers /> }
  ];

  const filteredActivities = activeCategory === 'todas' 
    ? activities 
    : activities.filter(activity => activity.category === activeCategory);

  const getIntensityColor = (intensity) => {
    switch (intensity) {
      case 'Baixa': return '#4CAF50';
      case 'Média': return 'orange';
      case 'Alta': return '#FF9800';
      case 'Muito Alta': return '#F44336';
      default: return 'orange';
    }
  };

  return (
    <section className="activity-section">
      <div className="activity-container">
        {/* Header da Seção */}
        <div className="activity-header">
          <div className="header-content">
            <span className="section-subtitle">Descubra Suas</span>
            <h2 className="section-title">Atividades Favoritas</h2>
            <p className="section-description">
              Oferecemos uma variedade completa de atividades para todos os níveis e objetivos. 
              Encontre a modalidade perfeita para você!
            </p>
          </div>
        </div>

        {/* Filtros de Categoria */}
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="filter-icon">{category.icon}</span>
              <span className="filter-text">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Grid de Atividades */}
        <div className="activities-grid">
          {filteredActivities.map(activity => (
            <div key={activity.id} className="activity-card">
              <div className="card-image">
                <img src={activity.image} alt={activity.name} />
                <div className="card-overlay">
                  <button className="play-btn">
                    <FaPlay />
                  </button>
                </div>
                <div className="intensity-badge" style={{ backgroundColor: getIntensityColor(activity.intensity) }}>
                  {activity.intensity}
                </div>
              </div>
              
              <div className="card-content">
                <div className="card-header">
                  <div className="activity-icon">
                    {activity.icon}
                  </div>
                  <h3 className="activity-name">{activity.name}</h3>
                </div>
                
                <p className="activity-description">{activity.description}</p>
                
                <div className="activity-info">
                  <div className="info-item">
                    <FaClock className="info-icon" />
                    <span>{activity.duration}</span>
                  </div>
                  <div className="info-item">
                    <FaUsers className="info-icon" />
                    <span>{activity.participants}</span>
                  </div>
                </div>

                <div className="activity-benefits">
                  <h4>Benefícios:</h4>
                  <ul>
                    {activity.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className="activity-schedule">
                  <div className="schedule-header">
                    <FaCalendarAlt className="schedule-icon" />
                    <span>Horários</span>
                  </div>
                  <div className="schedule-times">
                    {activity.schedule.map((time, index) => (
                      <span key={index} className="schedule-time">{time}</span>
                    ))}
                  </div>
                </div>

                <div className="card-actions">
                  <button className="btn-primary">Agendar Aula</button>
                  <button className="btn-secondary">Saiba Mais</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="activity-cta">
          <div className="cta-content">
            <h3>Pronto para começar?</h3>
            <p>Agende sua aula experimental gratuita e descubra qual atividade combina mais com você!</p>
            <button className="cta-button">
              <FaCalendarAlt />
              Agendar Teste Gratuito
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activity;