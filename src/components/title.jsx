import '../style/title.scss'; // Certifique-se de criar e ajustar este arquivo CSS

const Title = ({ title, description, id }) => {
  return (
    <div id={id} className="section-header">
      <p className='title'><i>{title}</i></p>
      <p className='description'>{description}</p>
    </div>
  );
};

export default Title;