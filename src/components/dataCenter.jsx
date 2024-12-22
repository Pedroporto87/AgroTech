import '../style/maq-equi.scss'
import Title from './title' 
import FiguraBg from '../img/Figura-removebg-preview.png'

export const DataCenter = () => {
  return (
    <>
    <Title title={"Data Center"} id={"datacenter"}/>
    <section className='datacenter'>
        <section className='datacenter-pt1'>
            <section className='datacenter-text-pt1'>
                <h1>Computação de Borda no Agronegócio</h1>
                <p>A computação de borda (Edge Computing) envolve o processamento de dados mais próximo da fonte de coleta, em vez de depender exclusivamente de datacenters centralizados. No
                contexto do agronegócio, isso significa que os dados coletados por dispositivos IoT podem ser processados em Edge Datacenters localizados próximos às fazendas e cooperativas
                agrícolas.</p>
            </section>
            <section className='datacenter-img-pt1'>
                <img src={FiguraBg} alt="figura" />
            </section>
        </section>
        <section className='datacenter-img'>
            <img src={FiguraBg} alt="figura" />
        </section>
        <section className='datacenter-pt2'>
            <section className='datacenter-img-pt2'>
                <img src={FiguraBg} alt="figura" />
            </section>
            <section className='datacenter-text-pt2'>
                <p className='datacenter-p'><strong>Redução da Latência</strong></p>
                <p>Processar dados localmente reduz o tempo necessário para obter informa acionáveis, permitindo uma resposta mais rápida a eventos críticos, como a detecção de pragas ou a
                necessidade de irrigação. A latência reduzida é crucial para aplicações em tempo real, onde atrasos podem resultar em perdas significativas.
                </p>
                <p className='datacenter-p'><strong>Economia de Banda</strong> </p>
                <p>Ao processar dados localmente, apenas informações relevantes e resumidas precisam ser enviadas para datacenters centrais, reduzindo a quantidade de dados transmitidos e
                economizando largura de banda. Isso é particularmente importante em áreas rurais, onde a conectividade pode ser limitada.
                </p>
                <p className='datacenter-p'><strong>Maior Resiliência</strong> </p>
                <p>Edge Datacenters podem continuar a operar mesmo em caso de falhas de conexão com a internet, garantindo que as operações agrícolas não sejam interrompidas. Isso aumenta a
                resiliência das operações e minimiza o risco de perda de dados.
                </p>
                <p className='datacenter-p'><strong>Segurança de Dados</strong> </p>
                <p>Manter os dados localmente pode aumentar a segurança e a privacidade, uma vez que menos informações sensíveis são transmitidas pela rede. Além disso, a computação de borda
                permite a implementação de medidas de segurança adicionais, como criptografia e autenticação em multicamadas.
                </p>
               </section>
        </section>        
                <div className='divider'></div>
                <section className='datacenter-pt3'>
                    <section className='datacenter-text-pt3'>
                        <p className='datacenter-p'>A partir de uma sólida parceria com Trusted Data o Agrotech Global é capaz de fornecer soluções de Edge Datacenters totalmente customizados para atender toda a cadeia produtiva do
                        agronegócio.
                        </p>
                        <p className='datacenter-p'>Nossas soluções de Edge Computing são robustas e utilizam o que há de mais avançado e inovador no mercado de datacenter de borda. São soluções capazes de atender, com total
                        segurança, com menor consumo energético e baixo custo operacional.
                        </p>
                    </section>
                    <section className='datacenter-img-pt3'>
                        <img src={FiguraBg} alt="figura" />
                    </section>
                </section>
                <section className='datacenter-opex'>
                    <p className='datacenter-title'>Nossas soluções podem ser oferecidas nas modalidades de:</p>
                    <p className='datacenter-p'><span>CAPEX: </span>
                    <i>(do inglês, Capital Expenditure, que significa “despesas de capitais”. Sendo assim, entra no Capex a parcela dos recursos da empresa que será destinada a bens de capital.)</i></p>
                    <p className='datacenter-p'><span>OPEX: </span>
                    <i>(do inglês Operational Expenditure, que significa em português “despesas operacionais”. Em outras palavras, entra no Opex todo o montante que a empresa investe em bens operacionais.)</i></p>
                </section>
    </section>
    </>
  
)}