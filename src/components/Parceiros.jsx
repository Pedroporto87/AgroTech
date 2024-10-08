
import '../style/parceiros.scss';

const partners = [
  { name: 'Parceiro 1', link: 'https://parceiro1.com', imgSrc: 'link-para-imagem1' },
  { name: 'Parceiro 2', link: 'https://parceiro2.com', imgSrc: 'link-para-imagem2' },
  { name: 'Parceiro 3', link: 'https://parceiro2.com', imgSrc: 'link-para-imagem2' },
  { name: 'Parceiro 4', link: 'https://parceiro2.com', imgSrc: 'link-para-imagem2' },
  { name: 'Parceiro 5', link: 'https://parceiro2.com', imgSrc: 'link-para-imagem2' },
  { name: 'Parceiro 6', link: 'https://parceiro2.com', imgSrc: 'link-para-imagem2' },
  { name: 'Parceiro 7', link: 'https://parceiro2.com', imgSrc: 'link-para-imagem2' },
  { name: 'Parceiro 8', link: 'https://parceiro2.com', imgSrc: 'link-para-imagem2' },
  { name: 'Parceiro 9', link: 'https://parceiro2.com', imgSrc: 'link-para-imagem2' },
  { name: 'Parceiro 10', link: 'https://parceiro2.com', imgSrc: 'link-para-imagem2'},
  { name: 'Parceiro 11', link: 'https://parceiro2.com', imgSrc: 'link-para-imagem2' },
  { name: 'Parceiro 12', link: 'https://parceiro2.com', imgSrc: 'link-para-imagem2' },
  { name: 'Parceiro 13', link: 'https://parceiro2.com', imgSrc: 'link-para-imagem2' },
  { name: 'Parceiro 14', link: 'https://parceiro2.com', imgSrc: 'link-para-imagem2' },
  { name: 'Parceiro 15', link: 'https://parceiro2.com', imgSrc: 'link-para-imagem2' },
  { name: 'Parceiro 16', link: 'https://parceiro2.com', imgSrc: 'link-para-imagem2' },
  { name: 'Parceiro 17', link: 'https://parceiro2.com', imgSrc: 'link-para-imagem2' },
  { name: 'Parceiro 18', link: 'https://parceiro2.com', imgSrc: 'link-para-imagem2' },
  { name: 'Parceiro 19', link: 'https://parceiro2.com', imgSrc: 'link-para-imagem2' }
];

const Parceiros = () => {
  return (
    <section className="partners-section">
      <h1>Parceiros</h1>
      <div className="partners-card">
        {partners.map((partner, index) => (
          <a key={index} href={partner.link} target="_blank" rel="noopener noreferrer">
            <img src={partner.imgSrc} alt={partner.name} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Parceiros;