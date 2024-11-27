import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate(); // useNavigate hook

  // Check authentication status when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem("token");

    // Update authentication state
    setIsAuthenticated(false);

    // Redirect to the landing page (or home)
    navigate("/"); // Use navigate for programmatic navigation
  };

  return (
    <header className="header_container">
      <h1 className="header_title">CakeCentral</h1>
      <nav className="header_nav">
        <ul className="header_menu">
          {isAuthenticated ? (
            <>
              <li className="header_item">
                <Link to="/landing">Home</Link>
              </li>
              <li className="header_item">
                <Link to="/menu">Menu</Link>
              </li>
              <li className="header_item">
                <Link to="/courses">Courses</Link>
              </li>
              <li className="header_item">
                <Link to="/enrolled">Enrollment</Link>
              </li>
              <li className="header_item">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="header_item">
                <button onClick={handleLogout} className="logout_button">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="header_item">
                <Link to="/">Home</Link>
              </li>
              <li className="header_item">
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
