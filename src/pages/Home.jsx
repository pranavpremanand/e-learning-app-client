import React from "react";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import { Footer } from "../components/Footer";
const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <Content />
      <Footer/>
    </div>
  );
};

export default Home;
