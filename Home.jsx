import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1>Welcome to Heart Health Info</h1>
        <p>
          Your heart is your lifeline. Heart disease is one of the leading causes of death,
          but most cases can be prevented with awareness and healthy lifestyle choices.
        </p>
        <h3>Common Symptoms:</h3>
        <ul>
          <li>Chest pain or discomfort</li>
          <li>Shortness of breath</li>
          <li>Fatigue or weakness</li>
          <li>Irregular heartbeat</li>
          <li>Dizziness or fainting</li>
        </ul>
      </div>
      <div className="home-image">
        <img
          src="/heart1.png"
          alt="Heart Health"
          className="heart-image"
        />
      </div>
    </div>
  );
};

export default Home;
