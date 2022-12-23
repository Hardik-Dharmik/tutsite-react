import "bootstrap/dist/css/bootstrap.min.css";
import FacultySection from "./components/FacultySection";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./components/About";

import React from "react";
function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <About />
      <FacultySection />
      <Footer />
    </div>
  );
}

export default App;
