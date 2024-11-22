import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Landing from "./pages/Landing/Landing";

function App() {
  return (
    <Router>
      <div className="app_container">
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
