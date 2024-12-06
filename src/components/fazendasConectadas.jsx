import '../style/fazendasConectadas.scss';
import Truck  from '../img/truck.png'
import Title from './title';
import Bovino from '../img/Imagem 04 - Telemetria Rebanhos.png'

export const FazendasConectadas = () => {
  return (
    <>
    <Title title={"Produtos e Serviços"} description={"Fábrica de Softwares"} id={"fabrica-softwares"}/>
    <section className='farm-1'>
      <section className='farm-text-1'>
      <p>
      A parceria entre Agrotech e Ideros destaca-se como um exemplo de excelência no
      desenvolvimento de soluções tecnológicas para o agronegócio, unindo expertise em
      software e inovação para atender às complexas necessidades do setor. O Agrotech |
      Ideros é uma vertical dedicada à criação de plataformas, aplicações e softwares
      totalmente customizados, proporcionando aos clientes e parceiros uma vantagem
      competitiva significativa.
      </p>
      <h1><strong>Qualidade e Diferenciais da Parceria Agrotech | Ideros:</strong></h1>
        <ol>
          <li>Desenvolvimento Personalizado: Nossa abordagem é centrada no cliente e nas
          suas necessidades específicas. Desenvolvemos soluções sob medida que se
          integram perfeitamente em toda a cadeia produtiva, desde cooperativas e
          pequenos agricultores até grandes produtores e fábricas. Cada software é
          projetado para adaptar-se às operações exclusivas de cada cliente, garantindo
          máxima eficácia.</li>
          <li>Flexibilidade e Rapidez: A personalização permite um desenvolvimento mais
            flexível e veloz. As soluções podem ser rapidamente ajustadas para responder a
            mudanças nas condições de mercado ou nos processos internos, possibilitando
            uma implementação ágil que minimiza interrupções.</li>
          <li>
          Econômico e Eficiente: Desenvolver software customizado pode ser mais
          financeiramente vantajoso a longo prazo, pois elimina custos desnecessários
          associados a funcionalidades irrelevantes e maximiza o retorno sobre o
          investimento através de soluções que atendem precisamente às demandas do
          cliente
          </li>
        </ol>
      </section>
      <section className='farm-text-2'>
      <img src={Truck} alt="foto de caminhão Agrotech"/>
      </section>
    </section>
    <section className='farm-2'>
      <section className='farm-text-2'>
        <h1 className='farm-h1'><strong>Áreas de Aplicação e Benefícios:</strong></h1>
        <ul>
          <li>Máquinas e Implementos Agrícolas: Software customizado para otimizar o uso e a manutenção, garantindo que os equipamentos operem com máxima eficiência e durabilidade</li>
          <li>Frotas de Veículos e Caminhões: Gestão eficiente de frotas através de aplicações que monitoram e gerenciam em tempo real, melhorando a logística e reduzindo custos operacionais.</li>
          <li>Pivôs de Irrigação e Bombas d’água: Desenvolvimento de controles precisos e automações que garantem o uso eficiente de recursos hídricos, aumentando a sustentabilidade e a
          produtividade.</li>
          <li>Balanças e Motores: Soluções para monitorar e controlar operações críticas, assegurando precisão e performance ideal.</li>
          <li>Silosbag: Aplicativos que monitoram e mantêm as condições ideais de armazenamento, preservando a qualidade dos grãos.
          </li>
        </ul>
      </section>
      <section className='farm-img-2'>
        <img src={Bovino} alt="foto de bovino com brinco de rastreamento"/>
      </section>
      <section className='farm-p'>
        <p>Ao escolher a parceria Agrotech | Ideros, as organizações do setor agropecuário não só acessam tecnologia de ponta, mas também beneficiam-se de uma colaboração comprometida
        com o sucesso contínuo de suas operações. Esta aliança promove uma inovação que transforma desafios em oportunidades, assegurando que cada cliente esteja bem posicionado
        para crescer e prosperar no competitivo mercado agroindustrial.</p>
      </section>
    </section>
    </>
  );
}
