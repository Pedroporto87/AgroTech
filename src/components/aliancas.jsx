import FiguraBg from '../img/Figura-removebg-preview.png'
import Abinc from '../img/parceiros/abinc.jpeg'
import Anatel from '../img/parceiros/anatel.jpeg'
import Abdc from '../img/parceiros/abdc.jpeg'
import Ibrtec from '../img/parceiros/ibrtec.jpeg'
import Title from './title'
import '../style/aliancas.scss'

const Aliancas = () => {
  return ( 
    <>
    <Title title={"Alianças Estratégicas"} id={"aliancas"}/> 
    <section className='aliancas'>
        <section className='aliancas-logos'>
            <img src={Abinc} alt="logo da Abinc" />
            <img src={Abdc} alt="logo da Abdc" />
            <img src={Ibrtec} alt="logo da Ibrtec" />
            <img src={Anatel} alt="logo da Anatel" />
        </section>
        <section className='aliancas-img'>
            <img src={FiguraBg} alt="imagem generica" />
        </section>
    </section>
    </>
)
}

export default Aliancas