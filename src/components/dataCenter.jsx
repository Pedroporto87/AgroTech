import '../style/datacenter.scss';
import Mapa from '../img/Imagem 01 - Datacenter.png'
import Edge  from '../img/edge-computing.png' 

export const DataCenter = () => {
  return (
    <section id="datacenter" className='datacenter'>
      <section className='image-section'>
        <img src={Mapa} alt="mapa do Brasil"/>
        <img src={Edge} alt="edge computing" />
      </section>
      <section className='text-section'>
        <section className='header'>
          <h1>Data Center</h1>
          <p>armazenamento e processamento</p>
        </section>
        <section className='content'>
          <p>Solução completa de construção e certificação de ambientes
            de Datacenter e Mini Datacenter(SmartPoP) para o mercado do 
            agronegócio
          </p>
          <p>O ecossistema de edge datacenter do AgroTech | Trusted, contra 
            com o desenvolvimento de projetos, instalação e fornecimento
            de equipamentos no modelo DaaS(Datacenter as a Service) com 
            100% do valor investido como Opex para o cliente, 
            cooperativa, agroindústria, provedores e operadoras.
          </p>
          <section className='data-ul'>
            <p>Ambientes preparados para:</p>
            <ul>
              <li>Colocation</li>
              <li>Interconnect</li>
              <li>Cross Connect</li>
              <li>Metro & Intermetro Connect</li>
              <li>Last Mile Connect</li>
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
}
