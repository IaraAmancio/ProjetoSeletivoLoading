import React, { useState } from 'react';
// Arquivo CSS para estilizar o formulário
import exampleImage from '../assets/logo_azul.png'; // Certifique-se de ter uma imagem neste caminho

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log(formData);
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Contato</h2>
        <label>
          Nome:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Mensagem:
          <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
      <div className="contact-image">
        <img src={exampleImage} alt="Example" />
      </div>
    </div>
  );
}

export default ContactForm;
