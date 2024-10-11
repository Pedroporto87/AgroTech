
import { FaLinkedin, FaInstagram } from 'react-icons/fa6';
import '../style/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li className="dropdown">
            <a href="#quem-somos">Quem Somos</a>
            <ul className="dropdown-content">
              <li><a href="#quem-somos">Quem Somos</a></li>
              <li><a href="#historia">História</a></li>
              <li><a href="#missao">Missão</a></li>
              <li><a href="#valores">Valores</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#solucoes">Soluções</a>
            <ul className="dropdown-content">
              <li><a href="#datacenter">Datacenter</a></li>
              <li><a href="#fabrica-software">Fábrica de Software</a></li>
              <li className="dropdown-submenu">
                Telemetria e Controle
                <ul className="submenu-content">
                    <li><a href="#maquinas-equipamentos">Máquinas e Equipamentos</a></li>
                    <li><a href="#rebanhos">Rebanhos</a></li>
                    <li><a href="#gestao-ativos">Gestão de Ativos</a></li>
                </ul>
                </li>
              <li><a href="#geo">Geo</a></li>
              <li><a href="#micro-usinas">Micro Usinas</a></li>
            </ul>
          </li>
          <li className="dropdown">
          <a href="#solucoes">Serviços</a>
            <ul className="dropdown-content">
              <li><a href="#servicos">Fazendas Conectadas</a></li>
            </ul>
          </li>
        </ul>
        <div className="compliance-section">
          <a href="/politica-seguranca.pdf" download>Política de Segurança</a>
          <a href="/politica-compliance.pdf" download>Política de Compliance</a>
        </div>
        <div className="social-media">
          <a href="https://www.linkedin.com/company/agrotech-data-center/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.instagram.com/agrotech.global/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;