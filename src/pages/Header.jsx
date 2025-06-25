import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem('role');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('role');
    navigate('/');
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 z-50 w-screen transition duration-300 ease-in-out ${
        isScrolled ? 'bg-black bg-opacity-80 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div
        className={`flex justify-between items-center px-6 py-4 ${
          isScrolled ? '' : 'bg-black bg-opacity-50'
        }`}
      >
        {/* Logo */}
        <div className="bg-white px-4 py-1 rounded-2xl text-black text-2xl font-bold">
          uC
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-white">
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
          {!role ? (
            <Link
              to="/login"
              className="py-1 px-4 bg-red-500 rounded-full hover:text-yellow-400"
            >
              Book Appointment
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="py-1 px-4 bg-red-500 rounded-full hover:text-yellow-400"
            >
              Logout
            </button>
          )}
        </nav>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-white px-6 py-4 space-y-4">
          <a href="#home" onClick={closeMobileMenu} className="block hover:text-yellow-400">Home</a>
          <a href="#about" onClick={closeMobileMenu} className="block hover:text-yellow-400">About</a>
          <a href="#service" onClick={closeMobileMenu} className="block hover:text-yellow-400">Service</a>
          <a href="#gallery" onClick={closeMobileMenu} className="block hover:text-yellow-400">Gallery</a>
          <a href="#contact" onClick={closeMobileMenu} className="block hover:text-yellow-400">Contact</a>

          {role === 'user' && (
            <Link to="/dashboard" onClick={closeMobileMenu} className="block hover:text-yellow-400">
              Dashboard
            </Link>
          )}
          {role === 'admin' && (
            <Link to="/admindashboard" onClick={closeMobileMenu} className="block hover:text-yellow-400">
              AdminDashboard
            </Link>
          )}

          {!role ? (
            <Link
              to="/login"
              onClick={closeMobileMenu}
              className="block py-1 px-4 bg-red-500 rounded-full hover:text-yellow-400"
            >
              Book Appointment
            </Link>
          ) : (
            <button
              onClick={() => {
                handleLogout();
                closeMobileMenu();
              }}
              className="block py-1 px-4 bg-red-500 rounded-full hover:text-yellow-400"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
