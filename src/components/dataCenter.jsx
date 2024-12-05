import '../style/datacenter.scss'; 
import Title from './title';

export const DataCenter = () => {
  return (
    <>
    <Title title={"Produtos e Serviços"} description={"Telemetria e Controle"} id={"telemetria-controle"} />
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
      <section className='telemetria-ol'>
        <h1><strong>Importância da Telemetria no Agronegócio:</strong></h1>
        <ol>
          <li>
          <strong>Eficiência Operacional:</strong> A telemetria permite o monitoramento contínuo e detalhado de máquinas e
          implementos agrícolas, como tratores e colheitadeiras. Isso resulta em uma operação mais eficiente, com
          menor tempo de inatividade e manutenção preditiva, evitando quebras inesperadas.
          </li>
          <li>
          <strong>Agricultura de Precisão:</strong> Sensores avançados possibilitam a coleta de dados em tempo real sobre as
          condições do solo, clima e desempenho das colheitas. Com isso, os agricultores podem tomar decisões mais
          informadas e precisas, otimizando o uso de insumos e recursos naturais
          </li>
          <li>
          <strong>Gerenciamento Remoto:</strong> As soluções de telemetria via satélite permitem o controle remoto de
          equipamentos como bombas d’água e pivôs de irrigação, assegurando que as operações críticas continuem
          sem interrupção, mesmo em locais remotos.
          </li>
          <li>
          <strong>Sustentabilidade:</strong> Ao melhorar a eficiência e reduzir o consumo de recursos, a telemetria contribui para
          práticas agrícolas mais sustentáveis, minimizando o impacto ambiental.
          </li>
          <li><strong>Segurança e Conformidade:</strong>
           A telemetria também auxilia no acompanhamento de normas de segurança e
          conformidade, assegurando que todas as operações estejam alinhadas com os regulamentos vigentes
          </li>
        </ol>
      </section>
    </section>
    </>
  );
}
