import React from "react";
import "./Location.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const Location = () => {
  return (
    <section className="location-section-container">
      <div className="location-section">
        <div className="location-header">
          <h2 className="location-title">Nossa Localização</h2>
          <p className="location-subtitle">
            Estamos localizados em um ponto estratégico de fácil acesso. Venha nos visitar e conhecer nossa estrutura!
          </p>
        </div>
        
        <div className="location-content">
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7901.986808237162!2d-34.84786!3d-7.9996160000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab3d494d9232e5%3A0xff2f7aee06bc41b2!2sAcademia%20Ciclos!5e0!3m2!1spt-BR!2sbr!4v1745270949828!5m2!1spt-BR!2sbr"
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Academia"
              className="google-map"
            ></iframe>
          </div>
          
          <div className="location-info-container">
            <div className="location-info">
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <h3>Endereço</h3>
                  <p>Av. Bernardo Vieira de Melo, 5000 - Candeias, Jaboatão dos Guararapes - PE, 54450-000</p>
                </div>
              </div>
              
              <div className="info-item">
                <FaPhone className="info-icon" />
                <div>
                  <h3>Telefone</h3>
                  <p>(81) 3333-4444</p>
                </div>
              </div>
              
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <div>
                  <h3>Email</h3>
                  <p>contato@academiacorpoemforma.com.br</p>
                </div>
              </div>
              
              <div className="info-item">
                <FaClock className="info-icon" />
                <div>
                  <h3>Horário de Funcionamento</h3>
                  <p>Segunda a Sexta: 6h às 22h</p>
                  <p>Sábado: 8h às 14h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>
            
            <a href="https://maps.app.goo.gl/uyaotNkqjrvXtfXV9"  rel="noopener noreferrer" className="directions-button">
              Como Chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;