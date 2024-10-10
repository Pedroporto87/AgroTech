
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
            <li><a href="#missao-valores">Missão, Visão e Valores</a></li>
            <li><a href="#parceiros">Parceiros</a></li>
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
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;