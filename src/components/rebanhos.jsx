import '../style/rebanhos.scss'
import Bovino from '../img/Imagem 04 - Telemetria Rebanhos.png'
import iconOx from '../img/icon-ox.png'
import geoLoc from '../img/icon-loc.png'
import graph from '../img/icon-graph.png'

export const Rebanhos = () => {
  return (
    <>
    <section className='rebanhos' id='rebanhos'>
        <section className='rebanhos-text'>
            <h1>Telemetria e Controle</h1>
            <p className='p-title'>rebanhos</p>
            <p>Saiba onde estão os seus animais quando você não pode vê-los</p>
            <p>Saiba a localização de seus touros, vacas e outros bovinos.
                Monitore o seu rebanho de qualquer lugar do Planeta, em
                tempo real e 24/7
            </p>
            <p>Através da tecnoclogia <strong>BLOCKCHAIN</strong>, comprove a origem do
            se rebanho, as práticas ESGs e agregue valor ao seu rebanho.
            </p>
        </section>
        <section className='rebanhos-img'>
            <img src={Bovino} alt="foto de bovino com brinco de rastreamento"/>
        </section>
    </section>
    <section className='rebanhos-info'>
        <section className='rebanhos-card'>
            <section className='card-info'>
                <img src={iconOx} alt="logo de bovino" />
                <p>Gestão de Estoque</p>
            </section>
            <p>
                Acesse dados e insight que otimizam a gestão do seu rebanho
            </p>
        </section>
        <section className='rebanhos-card'>
            <section className='card-info'>
                <img src={graph} alt="logo de graficos" />
                <p>Rastreabilidade</p>
            </section>
            <p>
                Rastreamento de animais, geofencing e prevenção de roubo
            </p>
        </section>
        <section className='rebanhos-card'>
            <section className='card-info'>
            <img src={geoLoc} alt="logo de localização" />
                    <p>Dados Confiáveis</p>
                </section>
                <p>
                    Monitoramento de integridade baseado em Atividade/GPs
                </p>
        </section>
    </section>
    </>
  )
}
