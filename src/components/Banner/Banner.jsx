import React from "react";
import bannerImg from "../../assets/img/Banner.png"; 
import "./Banner.css";

export default function Banner() {
  return (
    <section className="banner">
      <img
        src={bannerImg}
        alt="Banner Academia Ciclos"
        className="banner-img"
      />      
    </section>
  );
}