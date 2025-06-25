import React from 'react';
import HeroSection from './HeroSection';

const Home = () => {
  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/client-doing-hair-cut-barber-shop-salon_1303-20710.jpg?ga=GA1.1.1210140664.1747758452&semt=ais_hybrid&w=740')`,
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Responsive Content Container */}
      <div className="relative z-10 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 py-20 sm:py-32 text-white text-center">
        <HeroSection />
      </div>
    </div>
  );
};

export default Home;
