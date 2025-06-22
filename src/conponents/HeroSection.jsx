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
    <div className="p-28">
      <h1 className="text-white mt-20 font-bold text-7xl">Unisex Cutters</h1>
      <h2 className="text-lg text-white font-bold ml-72">"Style Has No Gender"</h2>
      {role && <div className="mt-10">
        
        <button
          onClick={handleScrollToServices}
          className="bg-red-500 hover:bg-red-600 text-white  text-2xl font-semibold py-5 px-40 rounded-full"
        >
         20% off<br></br> Book Now
        </button>
      </div>}
    </div>
  );
};

export default HeroSection;
