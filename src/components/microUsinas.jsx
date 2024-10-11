import usina1  from '../img/usina-1.png'
import usina2  from '../img/usina-2.png'
import usina3  from '../img/usina-3.png'
import '../style/microUsinas.scss'

export const MicroUsinas = () => {
  return (
    <>
    <section className='usina-header' id="micro-usinas">
        <h1>Micro Usinas</h1>
        <p>tratamento de água por ultra filtragem</p>
    </section>
    <section  className='micro-usina'>
        <section className="usina-grid">
            <section className="img-1">
                <img src={usina1} alt="imagem de uma usina" />
            </section>
            <section className="img-2">
            <img src={usina2} alt="imagem de uma usina" />
            </section>
            <section className="img-3">
            <img src={usina3} alt="imagem de uma usina" />
            </section>
        </section>
    <section className="usina-text">
    <section className='usina-p'>
        <p>As plantas de ultrafiltração UF 7 são projetadas para tratamento de
            água sbterrânea, água de superficie, água torrencias com turbidez
            até 300NTU
        </p>
        <p>O tratamento padrão inclui pré filtração (Filtros de tela autolimpante),
            skid's de membranas de ultrafiltração de 3° geração, limpeza de menbranas através de sopro de ar,
            limpesas químicas, limpezas de recuperação CIP(Clean in Process)
        </p>
        <p>
            Todas as manobras, tanto de operação como de limpeza são totalmente
            automatizadas, sem a necessidade de operação local.
        </p>
    </section>
    <section className='usina-ul'>
        <section className='usina-uf7'>
            <h1><strong>UF 7</strong></h1>
            <ul>
                <li>capacidade de 7m³/h</li>
                <li>atende de 500 a 700 pessoas</li>
            </ul>
        </section>
        <section className='usina-itens'>
        <h1><strong>Ideal para:</strong></h1>
            <ul>
                <li>Granjas(suínos/frango)</li>
                <li>Frigoríficos</li>
                <li>Fazendas</li>
                <li>Pequenas Comunidades</li>
            </ul>
        </section>
    </section>
    </section>
    </section>
</>
)
}
