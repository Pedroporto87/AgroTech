import '../style/parceiros.scss';
import spaceVis from '../img/parceiros/spacevis.jpeg'
import myriota from '../img/parceiros/myriota.jpeg'
import mobili from '../img/parceiros/mobili.jpeg'
import wiagro from '../img/parceiros/wiagro.jpeg'
import hex360 from '../img/parceiros/hex360.jpeg'
import ses from '../img/parceiros/ses.jpeg'
import une from '../img/parceiros/une.jpeg'
import otg from '../img/parceiros/otg.jpeg'
import trustedData from '../img/parceiros/trusteddata.jpeg'
import consultech from '../img/parceiros/consultech.jpeg'
import ideros from '../img/parceiros/ideros.jpeg'
import clemar from '../img/parceiros/clemar.jpeg'
import automatize from '../img/parceiros/automatize.jpeg'
import abinc from '../img/parceiros/abinc.jpeg'
import abdc from '../img/parceiros/abdc.jpeg'
import ibrtec from '../img/parceiros/ibrtec.jpeg'
import agtechgarage from '../img/parceiros/agtechgarage.jpeg'
import asbraap from '../img/parceiros/asbraap.jpeg'
import anatel from '../img/parceiros/anatel.jpeg'

const partners = [
  { name: 'Spacevis', link: 'http://www.spacevis.tech', imgSrc: spaceVis },
  { name: 'Myriota', link: 'https://myriota.com', imgSrc: myriota },
  { name: 'Mobili', link: 'https://mobili.net.br', imgSrc: mobili },
  { name: 'Wiagro', link: 'https://wiagro.com', imgSrc: wiagro },
  { name: 'Hex360', link: 'https://www.hex360.com.br', imgSrc: hex360 },
  { name: 'SES', link: 'https://www.ses.com', imgSrc: ses },
  { name: 'UNE Telecom', link: 'https://www.unetelecom.com.br', imgSrc: une },
  { name: 'OTG', link: 'https://www.otg.com.br', imgSrc: otg },
  { name: 'TrustedData', link: 'https://trusteddata.com.br', imgSrc: trustedData },
  { name: 'Consultech', link: 'https://parceiro2.com', imgSrc: consultech},
  { name: 'Ideros', link: 'http://www.ideros.com', imgSrc: ideros },
  { name: 'Clemar Engenharia', link: 'http://www.clemar.com.br', imgSrc: clemar },
  { name: 'Automatize', link: 'https://automatize.eng.br', imgSrc: automatize },
];
  const associocoes = [
  { name: 'ABINC', link: 'https://abinc.org.br', imgSrc: abinc },
  { name: 'ABDC', link: 'https://datacenter.org', imgSrc: abdc },
  { name: 'ibrtec', link: 'http://www.ibrtec.org.br', imgSrc: ibrtec },
  { name: 'AgTechGarage', link: 'https://www.pwc.com.br/pt/consultoria/agtech-innovation', imgSrc: agtechgarage },
  { name: 'AsBraAP', link: 'https://www.asbraap.org', imgSrc: asbraap },
  { name: 'ANATEL', link: 'https://www.gob.br/anatel/pt-br', imgSrc: anatel }
  ];

const Parceiros = () => {
  return (
    <section className="partners-section" id='parceiros'>
      <h1>Parceiros</h1>
      <div className="partners-card">
        {partners.map((partner, index) => (
          <a key={index} href={partner.link} target="_blank" rel="noopener noreferrer">
            <img src={partner.imgSrc} alt={partner.name} />
          </a>
        ))}
      </div>
      <div className="divider">
        <p>Associações</p>
      </div>

      <div className="associations-card">
        {associocoes.map((association, index) => (
          <a key={index} href={association.link} target="_blank" rel="noopener noreferrer">
            <img src={association.imgSrc} alt={association.name} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Parceiros;