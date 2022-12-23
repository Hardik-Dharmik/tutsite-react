import "bootstrap/dist/css/bootstrap.min.css";
import FacultySection from "./components/FacultySection";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import React, { Component } from "react";
function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <FacultySection />
      <Footer />
    </div>
  );
}

export default App;
