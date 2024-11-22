import React, { useState } from 'react';
import emailjs from 'emailjs-com';  // Import the EmailJS SDK
import './Order.css';

const Order = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deliveryDate: '',
    address: '',
    cakeChoice: '',
    totalCost: 0,
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'cakeChoice') {
      let cost = 0;
      // Set a cost based on the selected cake
      switch (value) {
        case 'Strawberry Cake':
          cost = 750;
          break;
        case 'Chocolate Cake':
          cost = 500;
          break;
        case 'Vanilla Cake':
          cost = 650;
          break;
        case 'Fruit Cake':
          cost = 870;
          break;
        case 'Red Velvet Cake':
          cost = 1100;
          break;
        case 'Wedding Cake':
          cost = 4000;
          break;
        default:
          cost = 0;
      }
      setFormData((prevData) => ({
        ...prevData,
        totalCost: cost,
      }));
    }
  };

  // Handle form submission and send email
  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      deliveryDate: formData.deliveryDate,
      address: formData.address,
      cakeChoice: formData.cakeChoice,
      totalCost: formData.totalCost,
    };

    // Send the email via EmailJS directly with the hardcoded values
    emailjs
        .send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,       // Service ID
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,      // Template ID
            templateParams,                                // Template parameters
            process.env.REACT_APP_EMAILJS_USER_ID          // User ID
        )
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert('Order placed successfully! A confirmation email has been sent.');
      })
      .catch((error) => {
        console.log('Email send error:', error);
        alert('Failed to send email. Please try again.');
      });
  };

  return (
    <div className="order_page">
      {/* Left side: Cake menu */}
      <div className="order_menu">
        <h2 className="menu_title">Cake Menu</h2>
        <div className="cake_list">
          <div className="cake_item" onClick={() => setFormData({ ...formData, cakeChoice: 'Strawberry Cake' })}>Strawberry Cake</div>
          <div className="cake_item" onClick={() => setFormData({ ...formData, cakeChoice: 'Chocolate Cake' })}>Chocolate Cake</div>
          <div className="cake_item" onClick={() => setFormData({ ...formData, cakeChoice: 'Vanilla Cake' })}>Vanilla Cake</div>
          <div className="cake_item" onClick={() => setFormData({ ...formData, cakeChoice: 'Fruit Cake' })}>Fruit Cake</div>
          <div className="cake_item" onClick={() => setFormData({ ...formData, cakeChoice: 'Red Velvet Cake' })}>Red Velvet Cake</div>
          <div className="cake_item" onClick={() => setFormData({ ...formData, cakeChoice: 'Wedding Cake' })}>Wedding Cake</div>
        </div>
      </div>

      {/* Right side: Order form */}
      <div className="order_form">
        <h2 className="form_title">Place Your Order</h2>
        <form onSubmit={handleSubmit}>
          <div className="form_group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form_group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form_group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form_group">
            <label htmlFor="deliveryDate">Delivery Date</label>
            <input
              type="date"
              id="deliveryDate"
              name="deliveryDate"
              value={formData.deliveryDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form_group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form_group">
            <label htmlFor="cakeChoice">Choose Cake</label>
            <select
              name="cakeChoice"
              id="cakeChoice"
              value={formData.cakeChoice}
              onChange={handleChange}
              required
            >
              <option value="Strawberry Cake">Strawberry Cake</option>
              <option value="Chocolate Cake">Chocolate Cake</option>
              <option value="Vanilla Cake">Vanilla Cake</option>
              <option value="Fruit Cake">Fruit Cake</option>
              <option value="Red Velvet Cake">Red Velvet Cake</option>
              <option value="Wedding Cake">Wedding Cake</option>
            </select>
          </div>

          <div className="form_group">
            <label>Total Cost: ${formData.totalCost}</label>
          </div>

          <button type="submit" className="submit_button">Place Order</button>
        </form>
      </div>
    </div>
  );
};

export default Order;
