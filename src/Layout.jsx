import React from 'react'
import Header from './pages/Header';
import HeroSection from './conponents/HeroSection';
import Gallery from './conponents/Gallery';
import Service from './conponents/Service';
import Contact from './conponents/Contact';
import About from './conponents/About';
import Footer from './pages/Footer';
import Home from './conponents/Home';
const Layout = () => {
  return (
    <div>
       <Header />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="service">
        <Service />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
