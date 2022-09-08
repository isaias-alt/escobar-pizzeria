import React from "react";
import Navbar from "../components/Navbar";
import "../styles/homePage.css";

const HomePage = () => {
  return (
    <div className="principal">
      <Navbar />
      <h1>This is the home page</h1>
    </div>
  );
};

export default HomePage;
