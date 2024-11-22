import React from 'react';
import './Landing.css';
import aboutImg from '../../assets/landing2.png';
import bakerImg from '../../assets/baker_img.png';

const Landing = () => {
  return (
    <div>
      {/* Landing Section */}
      <div className="landing_container">
      {/* Background image section */}
      <div className="background_image"></div>
      
      <div className="landing_content">
        {/* Text Section */}
        <div className="text_section">
          <h1 className="landing_title">Welcome to CakeShop</h1>
          <p className="landing_text">
            Discover the perfect cake for every occasion at CakeShop! Whether it's a birthday, wedding, or a special celebration, we have something to delight your taste buds.
          </p>
          <p className="landing_text">
            Our team of expert bakers uses only the finest ingredients to craft delicious, fresh, and beautifully decorated cakes. Join us in creating sweet memories.
          </p>
          <button className="landing_button">Order Now</button>
        </div>
        
        {/* Baker Image Section */}
        <div className="image_section">
          <img src={bakerImg} alt="Baker" className="baker_image" />
        </div>
      </div>
    </div>

      {/* About Section */}
      <div className="about_container">
        <div className="about_text about_left">
            <div className="feature_box">
            <h3>Comfortable Seating</h3>
            <p>Our seating arrangements are designed for maximum comfort, ensuring that you can relax and enjoy your meal in a cozy environment.</p>
            </div>
            <div className="feature_box">
            <h3>Unique Recipes</h3>
            <p>Our menu offers a variety of unique recipes that combine traditional flavors with modern twists, creating a delightful dining experience.</p>
            </div>
        </div>
        <div className="about_image">
            <img src={aboutImg} alt="About" />
        </div>
        <div className="about_text about_right">
            <div className="feature_box">
            <h3>Fresh Ingredients</h3>
            <p>We source only the freshest ingredients, ensuring that every dish is made with the finest quality products for the best taste.</p>
            </div>
            <div className="feature_box">
            <h3>Friendly Atmosphere</h3>
            <p>Our friendly staff and welcoming ambiance create the perfect environment for you to enjoy a meal with friends and family.</p>
            </div>
        </div>
        </div>

    </div>
  );
};

export default Landing;
