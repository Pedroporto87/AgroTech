import { useState } from 'react';
import '../style/contact.scss';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="contact-section" id='contato'>
        <h1>Contato</h1>
      <div className="contact-container">
        <div className="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7676.775568557777!2d-47.95486324655709!3d-15.836203323983698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSetor%20Smas%20Trecho%203%20Lote%203%2C%20203%20-%20Setores%20Complementares%2C%20Brasilia%20-%20DF%2C%2070.610-053.!5e0!3m2!1spt-BR!2sbr!4v1728358292226!5m2!1spt-BR!2sbr" width="450" height="450" border="0px" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="info-container">
          <p>Setor Smas Trecho 3 Lote 3, 203</p>
          <p>Setores Complementares, Brasilia - DF</p>
          <p>CEP: 70.610-053.</p>
          <button onClick={toggleModal}>Contato</button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>X</span>
            <img></img>
            <form>
              <label>Email:</label>
              <input type="email" required />
              <label>Telefone:</label>
              <input type="tel" required />
              <label>Mensagem:</label>
              <textarea style={{ resize: 'none' }} required></textarea>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;