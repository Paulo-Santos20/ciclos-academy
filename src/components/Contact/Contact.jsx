import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("enviando");

    emailjs
      .sendForm(
        "service_zy41bwo", // Substitua pelo seu Service ID do EmailJS
        "template_ba5tsgo", // Substitua pelo seu Template ID do EmailJS
        form.current,
        "VN7l4JdeSMDzGexk8" // Substitua pelo seu Public Key do EmailJS
      )
      .then(
        () => {
          setStatus("sucesso");
          form.current.reset();
        },
        () => {
          setStatus("erro");
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h3>Entre em Contato</h3>
          <div>
            <strong>Localização:</strong>
            <p>Rua Elesbão de Castro, 711.
            Bairro Novo. Olinda-PE.</p>
          </div>
          <div>
            <strong>E-mail:</strong>
            <p>
              <a href="mailto:contato@academiaciclos.com.br">
              contato@academiaciclos.com.br
              </a>
            </p>
          </div>
          <div>
            <strong>WhatsApp:</strong>
            <p>
              <a href="https://wa.me/81986612228"  rel="noopener noreferrer">
              (81) 9.8661-2228
              </a>
            </p>
          </div>
        </div>
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Nome" required />
          <input type="email" name="user_email" placeholder="E-mail" required />
          <input type="text" name="user_whatsapp" placeholder="WhatsApp" required />
          <textarea name="message" placeholder="Mensagem" required />
          <button type="submit" disabled={status === "enviando"}>
            {status === "enviando" ? "Enviando..." : "Enviar"}
          </button>
          {status === "sucesso" && <span className="success-msg">Mensagem enviada com sucesso!</span>}
          {status === "erro" && <span className="error-msg">Erro ao enviar. Tente novamente.</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;