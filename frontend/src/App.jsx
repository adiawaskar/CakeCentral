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

function App() {
  return (
    <Router>
      <div className="app_container">
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/enrolled" element={<Enrolled />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
