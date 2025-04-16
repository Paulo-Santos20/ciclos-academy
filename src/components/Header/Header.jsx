import React, { useState } from "react";
import "./Header.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => setMenuOpen((open) => !open);
    const handleLinkClick = () => setMenuOpen(false);

    return (
        <header className="header">
            <div className="header-inner">
                <div className="logo">
                    <a href="/" className="logo-link" aria-label="Página inicial">
                        <img
                            src="https://academiaciclos.com.br/wp-content/uploads/elementor/thumbs/logo_branco-q3zyzrzcz5951jn0kxsbnmvrscfotselmdnuqgacjy.png"
                            alt="Logo Ciclos"
                            className="logo-img"
                        />
                    </a>
                </div>
                <nav className={`menu ${menuOpen ? "open" : ""}`}>
                    <a href="#modalidades" onClick={handleLinkClick}>Modalidades</a>
                    <a href="#planos" onClick={handleLinkClick}>Planos e Preços</a>
                    <a href="#contato" onClick={handleLinkClick}>Contato</a>
                    <a
                        href="https://www.instagram.com/academiaciclos/#"

                        rel="noopener noreferrer"
                        className="insta-link"
                        aria-label="Instagram"
                        onClick={handleLinkClick}
                    >
                        <svg
                            width="26"
                            height="26"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#FF7A00"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="insta-icon"
                        >
                            <rect x="2" y="2" width="20" height="20" rx="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <circle cx="17.5" cy="6.5" r="1" />
                        </svg>
                    </a>
                </nav>
                <button
                    className={`menu-toggle${menuOpen ? " open" : ""}`}
                    onClick={handleMenuToggle}
                    aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </header>
    );
}