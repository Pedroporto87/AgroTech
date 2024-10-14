import '../style/geo.scss'
import agrohex from '../img/plataforma-agrohex-cut.png'
import geo1 from '../img/geo-1.png'
import geo2 from '../img/geo-2.png'
import geo3 from '../img/geo-3.png'

export const Geo = () => {
  return (
    <section id='geo'>
        <section className="geo-white">
            <h1>Geomonitoramento</h1>
            <p>Gestão de Áreas Rurais</p>
            <section className="geo-img">
                <img src={agrohex} alt="plataforma agrohex" />
            </section>
            <section className='geo-ul'>
                <ul>
                    <li>148 satélites conectados</li>
                    <li>Algorítmo de IA para o Agro, cobrindo os principais cultivos.</li>
                    <li>Capacidade de processar propriedades em todo o território Nacional.</li>
                    <li>98% das propriedades do Brasil já processadas</li>
                    <li>Maior banco de dados do cadastro rural Brasileiro</li>
                    <li>Geração de Relatório de Propriedade, Produção entre outros</li>
                    <li>Reduz o tempo de relatórios de produção</li>
                    <li>Relatório automatizado de Potencial Econômico Agrícola</li>
                    <li>Atende a todas as certificações e normativas da LGPD</li>
                </ul>
            </section>
            <section className='geo-card'>
                <img src={ geo1 } alt="imagem de satelite" />
                <img src={ geo2 } alt="imagem de satelite" />
                <img src={ geo3 } alt="imagem de satelite" />
            </section>
        </section>
        <section className="geo-green">
            <p>
                Camadas de informações de uso <br />
                simples e prático para obter <br />
                informações instantaneamente
            </p>
            <ul>
                <li>NDVI - análise completa do vigor da cultura a partir 
                    da identificação da atividade foto</li>
                <li>NDWI - identificação da quantidade de umidade presente na plantação</li>
                <li>NBR - visão completa da áreas queimadas com estimativa da gravidade do fogo</li>
                <li>NPCRI - identificação e análise de coberturas de gelo e neve nas áreas cultivadas</li>
                <li>NDMI - precisão para identificar mudanças sutis na umidade de plantações,
                    o que torna perfeito na avaliação de riscos de incêndio. 
                </li>
                <li>AVI - monitoramento detalhado de variações de colheita com identificação 
                    de diferentes tipos de vegetação e extratos de características fenológicas</li>
                <li>BSI - visão completa de variações de solo e composições minerais, 
                    utilizadas para mapeamento de solo e identificação de culturas</li>
            </ul>
        </section>
    </section>
  )
}
