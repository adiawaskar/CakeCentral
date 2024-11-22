// Menu.jsx
import React from 'react';
import './Menu.css';

// Sample cake images array
const cakes = [
    { id: 1, image: require('../../assets/cake1.avif'), name: 'Strawberry Cake' },
    { id: 2, image: require('../../assets/cake2.webp'), name: 'Chocolate Cake' },
    { id: 3, image: require('../../assets/cake3.jpg'), name: 'Vanilla Cake' },
    { id: 4, image: require('../../assets/cake4.jpeg'), name: 'Fruit Cake' },
    { id: 5, image: require('../../assets/cake5.jpeg'), name: 'Red Velvet Cake' },
    { id: 6, image: require('../../assets/cake6.jpg'), name: 'Wedding Cake' },
  ];

const Menu = () => {
  return (
    <div className="menu_page">
      <div className="menu_container">
        <h1 className="menu_title">MENU</h1>
        <div className="cake_grid">
          {cakes.length > 0 ? (
            cakes.map(cake => (
              <div key={cake.id} className="cake_item">
                <img src={cake.image} alt={`Cake ${cake.id}`} className="cake_image" />
                <p className="cake_name">{cake.name}</p>
              </div>
            ))
          ) : (
            <p className="no_items">No items available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
