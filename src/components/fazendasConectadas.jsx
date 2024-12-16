import '../style/fazendasConectadas.scss';
import Title from './title';
import Figura from '../img/Figura.jpg'

export const FazendasConectadas = () => {
  return (
    <>
    <Title title={"Fábrica de Softwares"}  id={"fabrica-softwares"}/>
    <section className='farm-1'>
      <section className='farm-text-1'>
      <p>
      A parceria entre Agrotech e Ideros destaca-se como um exemplo de excelência no
      desenvolvimento de soluções tecnológicas para o agronegócio, unindo expertise em
      software e inovação para atender às complexas necessidades do setor.
      </p>
      <p>
         O Agrotech |
        Ideros é uma vertical dedicada à criação de plataformas, aplicações e softwares
        totalmente customizados, proporcionando aos clientes e parceiros uma vantagem
        competitiva significativa.
      </p>
      </section>
      <section className='farm-img-1'>
        <img src={Figura} alt="figura"/>
      </section>
    </section>
    <section className='farm-polygon'>
      <h1><strong>Qualidade e Diferenciais da Parceria Agrotech | Ideros:</strong></h1>
        <ul>
          <li>
            <h1>Desenvolvimento Personalizado:</h1>
            <p>Nossa abordagem é centrada no cliente e nas
          suas necessidades específicas. Desenvolvemos soluções sob medida que se
          integram perfeitamente em toda a cadeia produtiva, desde cooperativas e
          pequenos agricultores até grandes produtores e fábricas. Cada software é
          projetado para adaptar-se às operações exclusivas de cada cliente, garantindo
          máxima eficácia.</p> 
          </li>
          <li>
              <h1>Flexibilidade e Rapidez:</h1>
              <p>A personalização permite um desenvolvimento mais
              flexível e veloz. As soluções podem ser rapidamente ajustadas para responder a
              mudanças nas condições de mercado ou nos processos internos, possibilitando
              uma implementação ágil que minimiza interrupções.</p> 
            </li>
          <li>
          <h1>Econômico e Eficiente:</h1> 
          <p>Desenvolver software customizado pode ser mais
          financeiramente vantajoso a longo prazo, pois elimina custos desnecessários
          associados a funcionalidades irrelevantes e maximiza o retorno sobre o
          investimento através de soluções que atendem precisamente às demandas do
          cliente</p>
          </li>
        </ul>
    </section>
    <section className='farm-2'>
      <section className='farm-text-2'>
        <h1 className='farm-h1'><strong>Áreas de Aplicação e Benefícios:</strong></h1>
        <ul>
          <li><span>Máquinas e Implementos Agrícolas:</span> Software customizado para otimizar o uso e a manutenção, garantindo que os equipamentos operem com máxima eficiência e durabilidade</li>
          <li><span>Frotas de Veículos e Caminhões:</span> Gestão eficiente de frotas através de aplicações que monitoram e gerenciam em tempo real, melhorando a logística e reduzindo custos operacionais.</li>
          <li><span>Pivôs de Irrigação e Bombas d’água:</span> Desenvolvimento de controles precisos e automações que garantem o uso eficiente de recursos hídricos, aumentando a sustentabilidade e a
          produtividade.</li>
          <li><span>Balanças e Motores:</span> Soluções para monitorar e controlar operações críticas, assegurando precisão e performance ideal.</li>
          <li><span>Silosbag:</span> Aplicativos que monitoram e mantêm as condições ideais de armazenamento, preservando a qualidade dos grãos.
          </li>
        </ul>
      </section>
      <section className='farm-img-2'>
        <img src={Figura} alt="figura"/>
      </section>
      {/* <section className='farm-p'>
        <p>Ao escolher a parceria Agrotech | Ideros, as organizações do setor agropecuário não só acessam tecnologia de ponta, mas também beneficiam-se de uma colaboração comprometida
        com o sucesso contínuo de suas operações. Esta aliança promove uma inovação que transforma desafios em oportunidades, assegurando que cada cliente esteja bem posicionado
        para crescer e prosperar no competitivo mercado agroindustrial.</p>
      </section> */}
    </section>
    </>
  );
}
