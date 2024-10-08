
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
              <li><a href="#telemetria">Telemetria</a></li>
              <li><a href="#geo">Geo</a></li>
              <li><a href="#micro-usinas">Micro Usinas</a></li>
            </ul>
          </li>
          <li><a href="#servicos">Serviços</a></li>
        </ul>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.linkedin.com/company/agrotech-data-center/" target="_blank" rel="noopener noreferrer">Linkedin</a>
          <a href="https://www.instagram.com/agrotech.global/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;