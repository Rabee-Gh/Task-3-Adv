import './Learn.css'; 
const Learn = ({array}) => {

  return (
    <div className="learn-section">
      {array.map((topic, index) => (
        <div className="learn-card" key={index}>
          <img src={topic.image} alt={topic.title} />
          <div className="card-content">
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Learn;