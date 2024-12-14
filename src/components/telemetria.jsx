import '../style/telemetria.scss';
import Bovino from '../img/Imagem 04 - Telemetria Rebanhos.png' 
import Title from './title';
import Figura from '../img/Figura.jpg'

export const Telemetria = () => {
  return (
    <>
    <Title title={"Telemetria e Controle"} description={"Telemetria e Controle"} id={"telemetria-controle"} />
    <section className='telemetria'>
      <section className='telemetria-text'>
        <p>
        A tecnologia de telemetria se destaca como um dos pilares fundamentais no avanço do agronegócio e da agricultura de precisão. No Agrotech, nossa solução
        completa via satélite revoluciona a gestão de máquinas e equipamentos, oferecendo uma visibilidade sem precedentes e controle em tempo real para
        agricultores e gestores.
        </p>
        <p>
        Ao integrar tecnologia de ponta, o Agrotech desenvolve aplicações, sensores e soluções de conectividade totalmente personalizadas, adaptadas às
        necessidades específicas de cada etapa da cadeia produtiva do agronegócio.
        </p>
        <p>
        Essa customização garante que cada equipamento, desde máquinas agrícolas até pivôs de irrigação, opere com máxima eficiência e produtividade.
        Segurança e conformidade, assegurando que todas as operações estejam alinhadas com os regulamentos vigentes.
        </p>
      </section>
      <section className='telemetria-ol-1'>
        <section className='telemetria-ol-p'>
          <p><strong>Importância da Telemetria no Agronegócio:</strong></p>
        </section>
        <ul>
          <section className="item-container">
            <img src={Figura} alt="figura" />
            <li>
            Eficiência Operacional: A telemetria permite o monitoramento contínuo e detalhado de máquinas e
            implementos agrícolas, como tratores e colheitadeiras. Isso resulta em uma operação mais eficiente, com
            menor tempo de inatividade e manutenção preditiva, evitando quebras inesperadas.
            </li>
          </section>
          <section className="item-container">
            <img src={Figura} alt="figura" />
            <li>
            Agricultura de Precisão: Sensores avançados possibilitam a coleta de dados em tempo real sobre as
            condições do solo, clima e desempenho das colheitas. Com isso, os agricultores podem tomar decisões mais
            informadas e precisas, otimizando o uso de insumos e recursos naturais
            </li>
          </section>
          <section className="item-container">
            <img src={Figura} alt="figura" />
            <li>
            Gerenciamento Remoto:As soluções de telemetria via satélite permitem o controle remoto de
            equipamentos como bombas d’água e pivôs de irrigação, assegurando que as operações críticas continuem
            sem interrupção, mesmo em locais remotos.
            </li>
          </section>
          <section className="item-container">
          <img src={Figura} alt="figura" />
          <li>
          Sustentabilidade: Ao melhorar a eficiência e reduzir o consumo de recursos, a telemetria contribui para
          práticas agrícolas mais sustentáveis, minimizando o impacto ambiental.
          </li>
          </section>
          <section className="item-container">
          <img src={Figura} alt="figura" />
          <li>
           Segurança e Conformidade:
           A telemetria também auxilia no acompanhamento de normas de segurança e
          conformidade, assegurando que todas as operações estejam alinhadas com os regulamentos vigentes
          </li>
          </section>
        </ul>
      </section>
    </section>
      <section className='telemetria-ol-2'>
        <h1>Aplicações Tecnológicas do Agrotech:</h1>
        <ul>
          <li><strong>Máquinas e Implementos Agrícolas:</strong> Monitoramento avançado para maximizar o desempenho e minimizar o tempo de inatividade.</li>
          <li><strong>Máquinas para Construção Civil:</strong> Gestão eficiente das operações em campo, otimizando o uso de equipamentos.</li>
          <li><strong>Pivôs de Irrigação e Bombas d’água:</strong> Controle remoto e ajuste preciso para garantir a irrigação ideal e economia de água.</li>
          <li><strong>Balanças e Motores:</strong> Supervisão em tempo real para garantir precisão e eficiência</li>
          <li><strong>Silosbag:</strong> Monitoramento de condições para assegurar a qualidade e conservação dos grãos armazenados</li>
        </ul>
      </section >
      <section className='telemetria-img'>
      <img src={Bovino} alt="foto de bovino com brinco de rastreamento"/>
      </section>
      <section className='telemetria-text'>
        <p>Com a tecnologia de telemetria da Agrotech, os agricultores têm em mãos uma ferramenta poderosa que não apenas melhora a produtividade e eficiência, mas também
        promove a inovação contínua no setor agropecuário. Assim, tornamos o agronegócio mais competitivo, sustentável e preparado para os desafios futuros</p>
      </section>
    </>
  );
}
