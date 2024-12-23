// import { useState } from 'react';
import '../style/contact.scss';
import Logo from '../img/logo.jpeg'
import Title from './title'
import { FaLinkedin, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa6';

const Contact = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  return (
    <>
    <Title title={"Contato"} id={"contato"} />
      <section className="contato" id='contato'>
          <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7676.775568557777!2d-47.95486324655709!3d-15.836203323983698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSetor%20Smas%20Trecho%203%20Lote%203%2C%20203%20-%20Setores%20Complementares%2C%20Brasilia%20-%20DF%2C%2070.610-053.!5e0!3m2!1spt-BR!2sbr!4v1728358292226!5m2!1spt-BR!2sbr" width="450" height="450" border="0px" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="info-container">
            <section className='info-container-logo'>
              <img src={Logo} alt="logo da Agrotech" />
            </section>
            <section className='info-conteiner-adress'>
              <p><strong>Venha nos visitar!</strong></p>
              <p>Setor Smas Trecho 3 Lote 3, 203</p>
              <p>Setores Complementares, Brasilia - DF</p>
              <p>CEP: 70.610-053.</p>
              <a className="projetos-link" href="mailto: agrotech@agrotech.global"> agrotech@agrotech.global</a>
              {/* <button onClick={toggleModal}>Contato</button> */}
            </section>
            <section className="social-media">
              <a href="https://www.linkedin.com/company/agrotech-data-center/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://www.instagram.com/agrotech.global/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.instagram.com/agrotech.global/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://www.instagram.com/agrotech.global/" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </section>
          </div>
        </section>
      </>
    );
    };

      {/* {isModalOpen && (
  <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={toggleModal}>X</span>
      <img alt="Imagem do Modal" />
      <form>
        <div className="form-row">
          <div className="form-column">
            <label htmlFor='name'>Nome:*</label>
            <input type="text" name='name' required />

            <label htmlFor='email'>Email Corporativo:*</label>
            <input type="email" name='email' required />

            <label htmlFor='telefone'>Telefone:*</label>
            <input type="text" name='telefone' required />
          </div>
          <div className="form-column">
            <label htmlFor="cargo">Cargo:*</label>
            <select name="cargo" id="cargo" className='cargo'>
              <option value="">Cargo</option>
              <option value="Estagiário">Estagiário</option>
              <option value="Assistente">Assistente</option>
              <option value="Analista">Analista</option>
              <option value="Coordenador">Coordenador</option>
              <option value="Gerente">Gerente</option>
              <option value="Diretor">Diretor</option>
              <option value="CEO/Proprietário">CEO/Proprietário</option>
              <option value="Outro">Outro</option>
            </select>

            <label htmlFor='msg'>Mensagem:*</label>
            <textarea style={{ resize: 'none' }} name='msg' required></textarea>
          </div>
        </div> */}
{/* 
        <div className='comunicacoes'>
          <input type="checkbox" id="comunicacoes" name="comunicacoes" />
          <label htmlFor="comunicacoes">
            Eu concordo em receber comunicações e ofertas personalizadas da Agrotech.
          </label>
        </div>

        <div className='politica'>
          <input type="checkbox" id="politica" name="politica" />
          <label htmlFor="politica">
            Li e concordo com a <a href="/politica-seguranca.pdf">Política de Privacidade</a> da Senior, que pode usar as informações aqui fornecidas por mim para entrar em contato comigo, via e-mail, telefone ou whatsapp, para ações de natureza comercial. Posso revogar meu consentimento a qualquer momento enviando um e-mail para agrotech@email.com.
          </label>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  </div>
)} */}

export default Contact;