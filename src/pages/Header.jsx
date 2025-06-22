import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import AdminDashboard from './AdminDashboard';
import Dashboard from './Dashboard';

const Header = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem('role');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-screen transition duration-300 ease-in-out ${
        isScrolled ? 'bg-black bg-opacity-80 shadow-lg' : 'bg-transparent'
      }`}
   
    >
      <div
        className={`flex justify-between items-center px-10 py-4 ${
          isScrolled ? '' : 'bg-black bg-opacity-50'
        }`}
      >
        <div className="ml-10  bg-white  rounded-2xl ">
          <h1 className="font-bold text-3xl text-black">uC</h1>
        </div>
        <nav className="flex items-center gap-10 text-white">
          <a href="#home" className="hover:text-yellow-400">Home</a>
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#service" className="hover:text-yellow-400">Service</a>
          <a href="#gallery" className="hover:text-yellow-400">Gallery</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>

          {role === 'user' && (
            <Link to="/dashboard" className="hover:text-yellow-400">
              Dashboard
            </Link>
          )}
          {role === 'admin' && (
            <Link to="/admindashboard" className="hover:text-yellow-400">
              AdminDashboard
            </Link>
          )}

          {!role && (
            <Link
              to="/login"
              className="py-1 px-4 bg-red-500 rounded-full hover:text-yellow-400"
            >
              Book Appointment
            </Link>
          )}

          {(role === 'user' || role === 'admin') && (
            <button
              onClick={() => {
                localStorage.removeItem('role');
                navigate('/');
              }}
              className="py-1 px-4 bg-red-500 rounded-full hover:text-yellow-400"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
