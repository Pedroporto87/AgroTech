import '../style/rebanhos.scss'
import Title from './title'
import Bovino from '../img/Imagem 04 - Telemetria Rebanhos.png'
import iconOx from '../img/icon-ox.png'
import geoLoc from '../img/icon-loc.png'
import graph from '../img/icon-graph.png'

export const Rebanhos = () => {
  return (
    <>
    <Title title={"Produtos e Serviços"} description={"Gestão de Rebanhos"} id={"gestao-rebanhos"}/>
    <section className='rebanhos' id='rebanhos'>
        <section className='rebanhos-text'>
        <p>A gestão eficiente de rebanhos bovinos é crucial para atender às exigentes normas internacionais de controle e
            rastreabilidade. A tecnologia Spacevis Agrotech surge como uma solução inovadora, levando a gestão de rebanhos a
            um novo patamar, seja em sistemas de confinamento ou em criações extensivas</p>
        <p>A plataforma Spacevis Agrotech revoluciona a maneira como os produtores coletam dados e aumentam a
            produtividade de seus rebanhos. Com soluções tecnológicas de ponta, ela permite o monitoramento em tempo real de
            performance e operações, tudo acessível na palma da mão. Isso garante que os pecuaristas possam tomar decisões
            informadas e ágeis, maximizando a eficiência e garantindo o bem-estar animal.
            </p>
        <p>Um dos pilares dessa transformação é a tecnologia de blockchain integrada à plataforma, que oferece inúmeros
            benefícios ao pecuarista. Esta inovação proporciona proteção patrimonial, melhora a liquidez, facilita o acesso a crédito
            e aumenta a rentabilidade. Além disso, ela abre as portas para mercados internacionais que exigem rastreabilidade
            rigorosa e práticas sustentáveis.
            </p>
        <p>Spacevis e Agrotech estão na vanguarda da utilização de blockchain na pecuária, assegurando que os produtores
            estejam alinhados com as melhores práticas globais. Essa combinação de tecnologia e gestão estratégica posiciona os
            pecuaristas para competir eficazmente em mercados cada vez mais exigentes, garantindo não apenas conformidade,
            mas também vantagem competitiva.</p>
        </section>
        <section className='rebanhos-img'>
            <img src={Bovino} alt="foto de bovino com brinco de rastreamento"/>
        </section>
    </section>
    <section className='rebanhos-info'>
        <section className='rebanhos-card'>
            <section className='card-info'>
                <img src={iconOx} alt="logo de bovino" />
               <strong><p>Gestão de Estoque</p></strong> 
            </section>
            <p>
                Acesse dados e insight que otimizam a gestão do seu rebanho
            </p>
        </section>
        <section className='rebanhos-card'>
            <section className='card-info'>
            <img src={geoLoc} alt="logo de localização" />
                <strong><p>Rastreabilidade</p></strong>
            </section>
            <p>
                Rastreamento de animais, geofencing e prevenção de roubo
            </p>
        </section>
        <section className='rebanhos-card'>
            <section className='card-info'>
            <img src={graph} alt="logo de graficos" />
                    <strong><p>Dados Confiáveis</p></strong>
                </section>
                <p>
                    Monitoramento de integridade baseado em Atividade/GPs
                </p>
        </section>
    </section>
    </>
  )
}
