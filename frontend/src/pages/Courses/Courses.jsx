import React, { useState } from "react";
import "./Courses.css";
import chefImg from '../../assets/chef_img.png';

// Array containing image paths and descriptions
const coursesData = [
  { image: require('../../assets/cakebaking.jpg'), title: "Cake Baking", description: "Learn the secrets to baking delicious cakes with expert guidance." },
  { image: require('../../assets/muffins.jpg'), title: "Pastry Making", description: "Master the art of brewing the perfect cup of coffee, from beans to brew." },
  { image: require('../../assets/breadbaking.jpeg'), title: "Bread Baking", description: "Discover the joy of making fresh, homemade bread from scratch." },
  { image: require('../../assets/coffeemaking.png'), title: "Coffee Making", description: "Create stunning pastries that look as good as they taste." },
];

const Courses = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState(''); // Email state added
  const [contactNo, setContactNo] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create student object
    const student = { name, email, contactNo, course: selectedCourse };

    try {
      // Make POST request to the backend
      const response = await fetch('http://localhost:5000/api/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),
      });

      const data = await response.json();
      
      if (response.ok) {
        // Clear form fields
        setName("");
        setEmail(""); // Clear email field
        setContactNo("");
        setSelectedCourse("");

        // Redirect to Enrolled page
        window.location.href = "/enrolled";
      } else {
        alert(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error enrolling student:', error);
      alert('Failed to enroll student');
    }
  };

  return (
    <div className="courses-page">
      {/* Landing Section */}
      <div className="courses-landing">
        <div className="landing-text-box">
          <h1>Welcome to Our Courses!</h1>
          <p>
            Welcome to our Culinary Masterclass! Explore the art of cake baking, coffee brewing, bread making, and pastry crafting with our expert-led courses. Whether you're a beginner or a seasoned chef, our workshops provide hands-on experience, innovative recipes, and pro tips to elevate your skills. Join us and bring your culinary dreams to life!
          </p>
        </div>
        <div className="landing-image-box">
          <img src={chefImg} alt="Chef" className="chef-image" />
        </div>
      </div>

      {/* Courses Grid */}
      <div className="courses-grid">
        {coursesData.map((course, index) => (
          <div className="course-card" key={index}>
            <img
              src={course.image}
              alt={course.title}
              className="course-image"
            />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>

      {/* Enrollment Form */}
      <div className="enrollment-form-container">
        <div className="enrollment-form-box">
          <h2>Enroll Now</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="contactNo">Contact Number</label>
              <input
                type="tel"
                id="contactNo"
                placeholder="Enter your contact number"
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="course">Select Course</label>
              <select
                id="course"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                required
              >
                <option value="">Select a Course</option>
                {coursesData.map((course, index) => (
                  <option key={index} value={course.title}>{course.title}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="submit-button">Enroll Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Courses;
