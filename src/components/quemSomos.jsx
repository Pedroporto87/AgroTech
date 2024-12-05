import '../style/quemSomos.scss'
import Title from './title' 
export const QuemSomos = () => {
  return (
    <>
    <Title title={"Quem Somos"} description={"A Empresa"} id={"a-empresa"}/>
      <section id='quem-somos'>
          <div className="conteudo">
              <p>O Agrotech é uma força transformadora no cenário das tecnologias aplicadas no agronegócio,
                desenvolvido especificamentepara suprir as demandas do maior setor econômico do Brasil.
                Situada em Brasília, capital estratégica no coraçãodo pais e berço do agronegócio nacional,
                a Agrotech é uma empresa 100% brasileira comprometida em impulsionar a inovação e a tecnologia no campo
              </p>
              <p>Nossa missão é fornecer soluções tecnológicas abrangentes que atendam toda a cadeia produtiva do agronegócio,
                desde pequenas propriedades rurais até grandes produtores, cooperativas e a agroindústria pesada. Com um diferencial
                competitivo garantido por sólidas parcerias globais, o Agrotech se destaca por sua capacidade de oferecer soluções
                personalizadas e completas, tornando o processo de aplicação detecnologia verdadeiramente fim a fim.
              </p>
              <p>A expertise da Agrotech abrange uma ampla gama de soluções tecnológicas crucias para o agronegócio moderno.
                Oferecemos desde armazenamento e processamento de dados em edge datacenters e computação de borda, até conectividade avançada
                e telemetria de controle. Além disso, nosso portfólio inclui software de gestão agrícola customizados,
                geomonitoramento de propriedades e produção, e consultoria técnica especializada, entre outros serviços voltados
                para o setor agro.
              </p>
              <p>Em suma, o Agrotech não é apenas um fornecedor de tecnologia, mas um parceiro estratégico que capacita o agronegócio
                a superar desafios e aproveitas oportunidades através de inovação contínua e soluções tecnológicas de ponta.
              </p>
          </div>
          <div className='conteudo-1'>
            <p>Agrotech, a new way of agribusiness</p>
          </div>
      </section>
    </>
  )
}
