import React from 'react';

const HeroSection = () => {
  const role = localStorage.getItem('role');

  const handleScrollToServices = () => {
    const serviceSection = document.getElementById('services');
    if (serviceSection) {
      serviceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="px-4 sm:px-8 lg:px-20 py-20 text-center">
      <h1 className="text-white font-bold text-4xl sm:text-5xl lg:text-7xl">
        Unisex Cutters
      </h1>
      <h2 className="text-white font-semibold text-base sm:text-lg lg:text-xl mt-4">
        "Style Has No Gender"
      </h2>

      {role && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={handleScrollToServices}
            className="bg-red-500 hover:bg-red-600 text-white text-lg sm:text-xl lg:text-2xl font-semibold py-3 sm:py-4 px-8 sm:px-12 lg:px-20 rounded-full"
          >
            <span className="block">20% off</span>
            <span className="block">Book Now</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
