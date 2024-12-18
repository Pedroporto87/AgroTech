import Title from './title'
import '../style/microUsinas.scss'
import Figura from '../img/Figura.jpg'

export const MicroUsinas = () => {
  return (
    <>
        <Title title={"Micro Usinas de Ultra Filtragem"} id={"micro-usinas"}/> 
        <section className='micro-usinas'>
            <section className='micro-usina-div'>
                <p>A qualidade da água consumida por criações de animais, como frangos e suínos, é um fator crítico que afeta diretamente a saúde, o bem-estar e a produtividade das criações. A utilização
                de tecnologias avançadas, como a Ultra filtragem por membranas, é essencial para garantir que a água fornecida seja de alta qualidade, livre de impurezas e adequada para o consumo
                animal.
                </p>
                <img src={Figura} alt="figura" />
            </section>
            <section className='micro-usina-text'> 
                <h1>Importância da Água de Alta Qualidade na Criação de Animais:</h1>
                <p><strong>Saúde Animal:</strong> A água limpa e bem tratada ajuda a prevenir doenças e infecções que podem surgir devido à presença de agentes patogênicos na água. Isso é especialmente
                importante em sistemas de produção intensiva, onde doenças podem se espalhar rapidamente entre os animais.
                </p>
                <p><strong>Desempenho e Crescimento:</strong> Animais que consomem água de alta qualidade tendem a ter melhor desempenho em termos de crescimento e conversão alimentar. Uma água livre
                de contaminantes assegura que os nutrientes dos alimentos sejam mais eficazmente utilizados, promovendo maior ganho de peso e produtividade</p>
                <p><strong>Redução de Perdas:</strong> A melhora na qualidade da água através da ultrafiltragem resulta em uma redução significativa de perdas na criação, pois diminui a incidência de problemas
                de saúde que podem levar a mortes ou à necessidade de tratamentos caros.
                </p>
            </section>
            <section className='micro-usina-div-2'>
                <section className='micro-usina-text-2'>
                    <h1>Vantagens da Ultrafiltragem por Membranas</h1>
                    <p>As plantas de ultrafiltração UF 7 são projetadas para o tratamento eficaz de diferentes fontes de água, como água subterrânea e de superfície, mesmo em condições de alta turbidez, até
                    300 NTU.
                    </p>
                    <p>O sistema de tratamento padrão inclui:</p>
                    <p><strong>Pré-filtração com Filtros de Tela Autolimpante:</strong> Essa etapa inicial remove partículas maiores, preparando a água para a ultrafiltragem subsequente</p>
                    <p><strong>Membranas de Ultrafiltração de 3ª Geração:</strong> Essas membranas de última geração são capazes de remover partículas finas e microorganismos, garantindo uma água de alta pureza</p>
                    <p><strong>Processos de Limpeza Avançados:</strong> A limpeza das membranas é feita por sopro de ar, limpezas químicas e limpezas de recuperação CIP, mantendo a eficiência do sistema.
                    </p>
                    <p><strong>Automação Completa:</strong> Todas as operações e processos de limpeza são totalmente automatizados, eliminando a necessidade de supervisão local constante e reduzindo a margem para
                    erros humanos.
                    </p>
            </section>
                <section className='microusinas-img'>
                    <img src={Figura} alt="figura" />
                </section>
            </section>
            <div className='last-p'>     
            <p><strong>Ao implementar sistemas de ultrafiltração por membranas, os produtores garantem uma água de alta qualidade que não apenas promove a saúde animal, mas também otimiza a
            produção e eleva a rentabilidade da operação agropecuária.</strong></p>
            <p><strong>A tecnologia de ultrafiltragem é, portanto, um investimento estratégico que impacta positivamente toda a cadeia produtiva.</strong></p>
            </div>
        </section>
    </>
)
}
