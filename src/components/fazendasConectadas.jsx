import '../style/fazendasConectadas.scss'

export const FazendasConectadas = () => {
  return (
    <section id="servicos" className='servicos'>
        <section className='servicos-titulo'>
            <h1>Projeto Fazendas Conectadas</h1>
            <p>Centro de Pesquisa e formação Profissional</p>
        </section>
        <section className='servicos-img'>
            <img src="../../public/scania-condicoes-2020-011.jpg" alt="caminhao" />
        </section>
        <section className='servicos-p'>
            <p>O <strong>Projeto Fazendas Conectadas</strong> é uma iniciativa
            do Agrotech Global junto com seus parceiros de tecnologia</p>
            <p>Trata-se de um centro de pesquisa e instrução/treinamento que irá percorrer
                diversas cooperativas, agroindústrias e eventos para as mais recentes
                tecnologias para o agronegócio
            </p>
            <p>Além de apresentar novas tendencias, equipamentos e soluções para o agro,
                o Projeto tem como principal foco treinar e capacitar novos profissionais
                para trabalharem com as tecnologias que estão sendo aplicadas no campo
            </p>
        </section>
        <section className='servicos-subtitle'>
            <h1>AgroTruk</h1>
        </section>
        <section className='servicos-ul'>
            <ul>
                <li>Participação em eventos técnicos</li>
                <li>Dias de Campo</li>
                <li>Parcerias com Cooperativas e Fabricantes</li>
            </ul>
        </section>
    </section>
)
}
