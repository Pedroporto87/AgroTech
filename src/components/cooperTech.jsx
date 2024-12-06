import Title from "./title"
// import CooperTech from '../img/coopertech.png'
import '../style/projetos.scss'

export const CooperTech = () => {
  return (
    <>
       <Title title={"Projetos"} description={"Coopertech"} id={"coopertech"}/>
       <section className="projetos">
        {/* <section className="projetos-img">
            <img src={CooperTech} alt="logo de CooperTech" />
        </section> */}
        <p>Coopertech é um projeto de integração Cooperativa/Cooperado para a comercialização de soluções de tecnologia
        e conectividade, com alto valor agregado, oferecido pelo Agrotech Global, em conjunto com uma Cooperativa
        Parceira, seja ela de crédito ou agrícola.
        </p>
        <p>Estes produtos e serviços serão comercializados, exclusivamente*, na região de atuação da Cooperativa, através de
        suas unidades, atendendo desta forma, seus cooperados e toda a cadeia produtiva do agronegócio.
        </p>
        <p>Este projeto é exclusivo para Cooperativas</p>
        <p><strong>Saiba Mais</strong></p>
        <a className="projetos-link" href="mailto:coopertech@agrotech.global">coopertech@agrotech.global</a>
       </section>
    </>
)
}

