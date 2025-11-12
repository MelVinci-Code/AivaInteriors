import React from "react";
import Banner from "./components/Banner";
import BannerTwo from "./components/BannerTwo";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Brands />
      <Services />
      <Banner />
      <BannerTwo />
      <Testimonial />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
