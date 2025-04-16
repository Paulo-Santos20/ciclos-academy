import React from "react";
import "./Banner.css";
import { FaStar, FaPercentage } from "react-icons/fa";
import BannerImg from "../../assets/img/academia.png"; // Ajuste o caminho da imagem

export default function Banner() {
  return (
    <section className="banner-container">
      <div className="banner-inner">
        <div className="banner-content">
          {/* Título dividido em duas partes */}
          <div className="banner-title">
            <span className="outlined-text">Foco,</span>
            <span className="outlined-text">Força e</span>
          </div>
          <div className="banner-subtitle">
            <span className="title-blue">Faça sua<br />matrícula!</span>
          </div>
          {/* Botões e chamada lateral */}
          <div className="banner-actions">
            <button className="banner-btn">saiba mais aqui!</button>
            <span className="banner-call">Agende já seu teste gratuito</span>
          </div>
        </div>
        <div className="banner-image-wrapper">
          <img src={BannerImg} alt="Treinamento" className="banner-image" />
        </div>
      </div>
      {/* Elementos decorativos */}
      <div className="decorative-elements">
        <FaStar className="star star-1" />
        <FaStar className="star star-2" />
        <FaStar className="star star-3" />
      </div>
    </section>
  );
}