import '../style/geo.scss'
import Title from './title'
import FiguraBg from '../img/Figura-removebg-preview.png'

export const Geo = () => {
  return (
    <>
    <Title title={"Geomonitoriamento"}  id={"geomonitoramento"} />
    <section className='geo'>
        <section className="geo-white">
            <p>A parceria entre Hex360 e Agrotech, através da AgroHex, transforma o cenário do
                agronegócio ao oferecer soluções de geomonitoramento que são essenciais nos dias
                de hoje. Em um mundo onde a precisão e a eficiência são cruciais, possuir o maior
                banco de cadastro de propriedades rurais do Brasil coloca a AgroHex na vanguarda
                da revolução agrícola</p>
            <p>Com nossa plataforma digital avançada, você tem acesso a informações geográficas
                detalhadas que são fundamentais para o planejamento estratégico. Em poucos
                cliques, obtenha análises ricas e detalhadas em tempo real das atividades em sua
                área de interesse. Este nível de monitoramento não apenas facilita a supervisão das
                suas terras, mas também permite acompanhar de perto o que está sendo produzido,
                avaliar a evolução ao longo do tempo e acessar dados críticos sobre a qualidade e a
                saúde das culturas.</p>
            <p>O geomonitoramento, com sua capacidade de fornecer insights precisos e
            atualizados, é uma ferramenta indispensável para agricultores modernos que buscam
            maximizar a produtividade e garantir práticas agrícolas sustentáveis. Com a AgroHex,
            você tem a vantagem competitiva necessária para prosperar em um mercado em
            constante transformação</p>
        </section>
        <section className="geo-green">
            <img src={FiguraBg} alt="figura"/>
            <img src={FiguraBg} alt="figura"/>
            <img src={FiguraBg} alt="figura"/>
        </section>
    </section>
    </>
  )
}
