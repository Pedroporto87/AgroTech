import '../style/missao.scss'
import Title from './title'
import Figura from '../img/Figura.jpg'

export const Missao = () => {
  return (
    <>
        <Title title={"Quem Somos"}  id={"missao-visao-valores"}/>
        <section id='missao-valores' className='missao'>
            <section className='card'>
                <img src={Figura}/>
                <h1>Missão</h1>
                <p>Incentivar o agronegócio brasileiro
                    através de tecnologia inovadora e
                    soluções sustentáveis, promovendo
                    a transformação digital que resulte
                    em maior eficiência, produtividade
                    e qualidade para nossos clientes e
                    parceiros
                </p>
            </section>
            <section className='card'>
                <img src={Figura}/>
                <h1>Visão</h1>
                <p>Ser reconhecida globalmente como
                    líder em inovação tecnológica para
                    o agronegócio, impulsionando
                    práticas sustentáveis e
                    colaborativas que garantam o
                    futuro do setor e o bem-estar das
                    comunidades agrícolas
                </p>
            </section>
            <section className='card'>
                <img src={Figura}/>
                <h1>Valores</h1>
            <ul>
                <li>
                <strong>Inovação Sustentável:</strong> Comprometimento com o desenvolvimento de
                soluções tecnológicas que priorizem a sustentabilidade ambiental e a
                prosperidade econômica.
                </li>
                <li>
                <strong>Ética e Transparência:</strong> Manter práticas transparentes e éticas em todas
                as interações com clientes, parceiros e colaboradores.
                </li>
                <li>
                <strong>Colaboração e Partilha de Conhecimento:</strong> Fomentar um ambiente de
                colaboração onde o conhecimento é partilhado e valorizado,
                impulsionando a melhoria contínua e o crescimento coletivo.
                </li>
                <li>
                <strong>Excelência e Qualidade:</strong> Dedicação à excelência e à melhoria contínua
                para garantir produtos e serviços de alta qualidade que superem as
                expectativas.
                </li>
                <li>
                <strong>Resiliência e Adaptabilidade:</strong> Estar preparado para enfrentar desafios
                e adaptar-se rapidamente às mudanças do mercado e das necessidades
                dos clientes.
                </li>
            </ul>
            </section>
            
        </section>
    </>
  )
}
