
import '../style/navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Logo</h1>
      <ul className="nav-links">
        <li className="dropdown">
          <a href="#quem-somos">Quem Somos</a>
          <ul className="dropdown-content">
            <li><a href="#quem-somos">Quem Somos</a></li>
            <li><a href="#historia">História</a></li>
            <li><a href="#parceiros">Parceiros</a></li>
            <li><a href="#missao-valores">Valores</a></li>
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
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;