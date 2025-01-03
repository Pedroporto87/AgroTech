import '../style/projetos.scss'
import Title from './title'
import ConnectedImg from '../img/connectedServices-1.png'

export const Connected = () => {
  return (
    <>
    <Title title={"Connected Services"} id={"connected-services"}/>
    <section className='projetos'>
      <section className='projetos-text'>
        <p><strong>Connected Services</strong>  é um projeto de integração e comercialização de soluções de
        tecnologia e conectividade, com alto valor agregado, oferecido pelo <strong>Agrotech Global</strong>, em
        conjunto com seu <strong>Parceiro do Agro</strong></p>
        <p>Estes produtos e serviços serão comercializados na região do Parceiro do Agro, com
        exclusividade*, através de sua rede de lojas e clientes, atendendo desta forma, toda a
        cadeia produtiva do agronegócio</p>
        <p><i>(*) verificar a política agrotech global de exclusividade na região do parceiro</i></p>
        <p><strong>Saiba Mais</strong></p>
        <a className="projetos-link" href="mailto: connectedservices@agrotech.global"> connectedservices@agrotech.global</a>
      </section>
      <section className='projetos-img'>
        <img src={ConnectedImg} alt="logo da Connected Services" />
      </section>
    </section>
    
    </>
  )
}



