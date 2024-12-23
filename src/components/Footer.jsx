// import { FaLinkedin, FaInstagram, FaChevronDown, FaFacebookF, FaYoutube } from 'react-icons/fa6';
import '../style/footer.scss';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li className="dropdown">
            <p href="#quem-somos"><strong>Quem Somos</strong></p>
            <ul className="dropdown-content">
              <li><a href="#quem-somos">Quem Somos</a></li>
              <li><a href="#missao-visao-valores">Missão, Valores e Visão</a></li>
              {/* <li><a href="#missao">Missão</a></li>
              <li><a href="#valores">Valores</a></li> */}
            </ul>
          </li>
          <li className="dropdown">
            <p href="#solucoes"><strong>Produtos e Serviços</strong></p>
            <ul className="dropdown-content">
              <li><a href="#gestao-rebanhos">Gestão de Rebanhos</a></li>
              <li><a href="#geomonitoramento">Geomonitoramento</a></li>
              <li><a href="#fabrica-softwares">Fábrica de Softwares</a></li>
              <li><a href="#micro-usinas">Micro Usinas de Ultra Filtragem</a></li>
              <li><a href="#datacenter">Datacenter</a></li>
            </ul>  
          </li>
          <li className="dropdown">
            <p href="#servicos"><strong>Projetos</strong></p>
            <ul className="dropdown-content">
              <li><a href="#coopertech">Coopertech</a></li>
              <li><a href="#connected-services">Connected Services</a></li>
              <li><a href="#ds-agro">DS Agro</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <p href="#servicos"><strong>Alianças</strong></p>
            <ul className="dropdown-content">
              <li><a href="#aliancas">Alianças</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <p href="#servicos"><strong>Politicas Empresariais</strong></p>
            <ul className="dropdown-content">
              <li><a href="/">Privacidade - LGPD Compliance</a></li>
              <li><a href="/">ESG</a></li>
              <li><a href="/">Cookies</a></li>
              <li><a href="/">Marketing</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <p href="#servicos"><strong>Contato</strong></p>
            <ul className="dropdown-content">
              <li><a href="#contato">Contato</a></li>
            </ul>
          </li>
        </ul>
        {/* <div className="compliance-section">
          <a href="/politica-seguranca.pdf" download>Política de Segurança</a>
          <a href="/politica-compliance.pdf" download>Política de Compliance</a>
        </div> */}
        {/* <div className="social-media">
          <a href="https://www.linkedin.com/company/agrotech-data-center/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.instagram.com/agrotech.global/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.instagram.com/agrotech.global/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com/agrotech.global/" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;