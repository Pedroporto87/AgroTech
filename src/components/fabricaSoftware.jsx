import '../style/fabricaSoftware.scss'
import fabrica1 from '../img/fabrica-1.png'
import fabrica2 from '../img/fabrica-2.png'
import fabrica3 from '../img/fabrica-3.png'

export const FabricaSoftware = () => {
  return (
    <section id="fabrica-software">
    <section className="fabrica-text">
        <h1>Fábrica de Software</h1>
        <p className="p-title">aplicações customizadas</p>
        <p>O Agrotech | Ideros é a vertical responsável pelo
            desenvolvimento de plataformas e aplicações para agronegócio
        </p>
        <p>
            Desenvolvemos software, totalmente customizados
            para toda a cadeia produtiva do agro, incluindo
            cooperativas, produtores, fábricas entre outros setores
        </p>
        <p>
            A implementação de um software ou aplicativo
            customizado é mais flexível, mais rápida de desenvolver e
            financeiramente mais atrativa
        </p>
        <ul>
            <li>Telemetria de Máquinas</li>
            <li>Gestão de Frotas</li>
            <li>Automação de Pivos</li>
        </ul>
    </section>
    <section className='fabrica-img'>
        <section className='fabrica-1'>
            <img src={fabrica1} alt="imagem de dispositivos" />
        </section>
        <section className='fabrica-2'>
            <img src={fabrica2} alt="imagem de telas de celulares" />
        </section>
        <section className='fabrica-3'>
            <img src={fabrica3} alt="imagem de dispositivos" />
        </section>
    </section>
    </section>
  )
}
