import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Landing from "./pages/Landing/Landing";
import Menu from "./pages/Menu/Menu";
import Order from "./pages/Order/Order";
import Contact from "./pages/Contact/Contact";
import Courses from "./pages/Courses/Courses";
import Enrolled from "./pages/Enrolled/Enrolled";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
// import Login from "./pages/Login/Login"; 
// import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <Router>
      <div className="app_container">
        {/* Pass isHomePage prop to Header */}
        <Header isHomePage={window.location.pathname === "/" || window.location.pathname === "/login"} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/enrolled" element={<Enrolled />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
