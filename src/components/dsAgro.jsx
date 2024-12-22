import '../style/projetos.scss'
import Title from './title'
import DsAgroImg from '../img/dsAgro-1.jpg'

export const DsAgro = () => {
  return (
    <>
    <Title title={"ds/Agro"} id={"ds-agro"}/>
    <section className='projetos'>
        <section className='projetos-img'>
          <img src={DsAgroImg} className='dsagro-img' alt="logo da dsAgro" />
        </section>
        <section className='projetos-text'> 
          <p>O <strong>Open Industry Program | Data Spaces for Agribusiness - ds/agro</strong> é um esforço colaborativo liderado pelo <strong>Agrotech Global</strong> em
          parceria com a <strong>Associação Brasileira de Internet das Coisas</strong> e seus associados</p>
          <p>O principal objetivo é estabelecer uma infraestrutura aberta e descentralizada para a <strong>Economia de Dados</strong> ou <strong>Comercialização de
          Dados técnicos</strong>, comerciais e agronômicos do setor agropecuário.</p>
          <p>Isso permitirá que os participantes tenham acesso e controle sobre os dados que produzem, além de compartilhar essas informações
          na <strong>Plataforma ds/agro</strong>, podendo assim gerar receitas com as informações colhidas no campo.</p>
          <p>Entenda melhor o Programa Data Spaces para o Agronegócio - ABINC | AGROTECH</p>
          <p><strong>Saiba Mais</strong></p>
          <a className="projetos-link" href="mailto:dsagro@agrotech.global">dsagro@agrotech.global</a>
        </section>

    </section>
    </>
  )
}
