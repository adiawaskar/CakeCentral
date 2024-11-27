import React from 'react';
import './Home.css';
import homeImage from '../../assets/cakecentral.jpg'; // Replace with your image path

const Home = () => {
  return (
    <div className="home-page">
      <img src={homeImage} alt="Home" className="home-image" />
      <div className="centered-text">
      <h1>Welcome to CakeCentral</h1>
      <p>Indulge in the finest cakes and elevate your baking skills with our exclusive courses!</p>
      </div>
    </div>
  );
};

export default Home;
