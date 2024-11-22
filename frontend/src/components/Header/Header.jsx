import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header_container">
      <h1 className="header_title">CakeCentral</h1>
      <nav className="header_nav">
        <ul className="header_menu">
          <li className="header_item">
            <Link to="/">Home</Link>
          </li>
          <li className="header_item">
            <Link to="/courses">Courses</Link>
          </li>
          <li className="header_item">
            <Link to="/enrolled">Enrollment</Link>
          </li>
          <li className="header_item">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="header_item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
