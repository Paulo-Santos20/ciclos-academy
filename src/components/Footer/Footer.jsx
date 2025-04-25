import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowRight } from "react-icons/fa";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-col footer-about">
            <p className="footer-description">
              Somos mais que uma academia. Somos um centro completo de saúde e bem-estar,
              dedicado a transformar vidas através de atividades físicas e hábitos saudáveis.
            </p>
            <div className="footer-social">
              <a href="https://facebook.com" rel="noopener noreferrer" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" rel="noopener noreferrer" className="social-icon">
                <FaTwitter />
              </a>
              <a href="https://youtube.com" rel="noopener noreferrer" className="social-icon">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="footer-col footer-links">
            <h3 className="footer-title">Links Rápidos</h3>
            <ul className="footer-menu">
              <li><a href="#home">Início</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#activities">Atividades</a></li>
              <li><a href="#structure">Estrutura</a></li>
              <li><a href="#pricing">Planos</a></li>
              <li><a href="#location">Localização</a></li>
            </ul>
          </div>

          <div className="footer-col footer-activities">
            <h3 className="footer-title">Atividades</h3>
            <ul className="footer-menu">
              <li><a href="#musculacao">Musculação</a></li>
              <li><a href="#pilates">Pilates</a></li>
              <li><a href="#spinning">Spinning</a></li>
              <li><a href="#funcional">Funcional</a></li>
              <li><a href="#zumba">Zumba</a></li>
              <li><a href="#boxe">Boxe</a></li>
            </ul>
          </div>

          <div className="footer-col footer-contact">
            <h3 className="footer-title">Contato</h3>
            <ul className="footer-contact-list">
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <p>Av. Bernardo Vieira de Melo, 5000<br />Candeias, Jaboatão - PE</p>
              </li>
              <li>
                <FaPhone className="contact-icon" />
                <p>(81) 3333-4444</p>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <p>contato@academia.com.br</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-newsletter">
          <h3 className="newsletter-title">Inscreva-se para Novidades</h3>
          <p className="newsletter-desc">Receba dicas de treino, promoções e notícias em primeira mão.</p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Seu email" 
              className="newsletter-input" 
            />
            <button className="newsletter-button">
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Academia Corpo Em Forma. Todos os direitos reservados.
          </p>
          <div className="footer-legal">
            <a href="/privacy">Política de Privacidade</a>
            <a href="/terms">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;