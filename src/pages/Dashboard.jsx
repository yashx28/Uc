import React, { useState } from 'react';
import Layout from '../Layout';
import { Link } from 'react-router-dom';
import ShowBooking from '../modal/showBooking';

const Dashboard = () => {
  const [showBookings, setShowBookings] = useState(false);

  const handleToggle = () => {
    setShowBookings(true);
  };

  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center flex flex-col lg:flex-row"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-vector/black-background-with-focus-spot-light_1017-27230.jpg?ga=GA1.1.1210140664.1747758452&semt=ais_hybrid&w=740')`,
      }}
    >
      {/* Sidebar (topbar on small screens) */}
      <div className="w-full lg:w-80 bg-black/70 text-white py-6 px-4 lg:min-h-screen">
        <div className="mb-4">
          <Link to="/" className="text-xl hover:underline">← Back</Link>
        </div>
        <h1
          className="text-red-600 font-bold text-xl sm:text-2xl cursor-pointer hover:text-red-300 transition"
          onClick={handleToggle}
        >
          User Appointments
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-8">
        {showBookings && <ShowBooking />}
      </div>
    </div>
  );
};

export default Dashboard;
