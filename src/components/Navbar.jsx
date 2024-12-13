import { FaChevronDown } from "react-icons/fa6";
import '../style/navbar.scss';
import Logo from '../img/logo.jpeg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} className='nav-img' alt="logo da Agrotech"/>
      <ul className="nav-links">
        <li className="dropdown">
          <a href="#quem-somos">Quem Somos <FaChevronDown /></a>
          <ul className="dropdown-content">
            <li><a href="#a-empresa">A Empresa</a></li>
            <li><a href="#missao-visao-valores">Missão, Visão e Valores</a></li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="#produtos-servicos">Produtos e Serviços <FaChevronDown /></a>
          <ul className="dropdown-content">
            <li><a href="#telemetria-controle">Telemetria e Controle</a></li>
            <li><a href="#gestao-rebanhos">Gestão de Rebanhos</a></li>
            <li><a href="#geomonitoramento">Geomonitoramento</a></li>
            <li><a href="#fabrica-softwares">Fábrica de Softwares</a></li>
            <li><a href="#micro-usinas">Micro Usinas de Ultra Filtragem</a></li>
            <li><a href="#datacenter">Datacenter</a></li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="#projetos">Projetos <FaChevronDown /></a>
          <ul className="dropdown-content">
            <li><a href="#coopertech">Coopertech</a></li>
            <li><a href="#connected-services">Connected Services</a></li>
            <li><a href="#ds-agro">DS Agro</a></li>
          </ul>
        </li>
        <li><a href="#aliancas">Alianças</a></li>
        <li><a href="#politicas-empresariais">Políticas Empresariais</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;