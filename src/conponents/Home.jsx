
    import React from 'react';
    import Header from '../pages/Header';
    import HeroSection from './HeroSection';

    const Home = () => {
    return (
        <div
        className="min-h-screen w-screen bg-cover bg-center relative"
        style={{
            backgroundImage: `url('https://img.freepik.com/free-photo/client-doing-hair-cut-barber-shop-salon_1303-20710.jpg?ga=GA1.1.1210140664.1747758452&semt=ais_hybrid&w=740')`, // replace with your image
        }}
        >
        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

        {/* Content on top of overlay */}
        <div className="relative z-10">
        <HeroSection />
        
        </div>
        </div>
    );
    };

    export default Home;
