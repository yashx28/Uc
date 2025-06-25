import React, { useState } from 'react';
import AddServiceModal from '../modal/AddService';
import AddBarberModal from '../modal/AddBarber';
import ShowUser from '../modal/showUser';
import ShowBarber from '../modal/showBarber';
import ShowBooking from '../modal/showBooking';
import { Link } from 'react-router-dom';
import Layout from '../Layout';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleSection = (section) => {
    setActiveSection(section);
  };


  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center flex flex-col lg:flex-row"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-vector/black-background-with-focus-spot-light_1017-27230.jpg?ga=GA1.1.1210140664.1747758452&semt=ais_hybrid&w=740')`,
      }}
    >
      {/* Sidebar */}
      <div className="w-full lg:w-80 bg-black/70 text-white py-6 px-4 space-y-6">
        <div>
          <Link to="/" className="text-xl text-white hover:underline">← Back</Link>
        </div>
        <button
          onClick={() => handleSection('Appointment')}
          className="block w-full text-left text-2xl text-red-400 font-semibold hover:text-red-300 transition"
        >
          My Appointments
        </button>
        <button
          onClick={() => handleSection('ManageUser')}
          className="block w-full text-left text-lg hover:text-blue-300 transition"
        >
          Manage All Users
        </button>
        <button
          onClick={() => handleSection('ManageBarber')}
          className="block w-full text-left text-lg hover:text-blue-300 transition"
        >
          Manage All Barbers
        </button>
        <button
          onClick={() => handleSection('bookings')}
          className="block w-full text-left text-lg hover:text-blue-300 transition"
        >
          Booking List
        </button>
        <button
          onClick={() => handleSection('serviceModal')}
          className="block w-full text-left text-lg hover:text-blue-300 transition"
        >
          Add New Services
        </button>
        <button
          onClick={() => handleSection('barberModal')}
          className="block w-full text-left text-lg hover:text-blue-300 transition"
        >
          Add New Barber
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-8">
        {activeSection === 'ManageUser' && (
          <ShowUser onClose={() => setActiveSection(null)} />
        )}
        {activeSection === 'bookings' && (
          <ShowBooking onClose={() => setActiveSection(null)} />
        )}
        {activeSection === 'ManageBarber' && (
          <ShowBarber onClose={() => setActiveSection(null)} />
        )}
        {activeSection === 'serviceModal' && (
          <AddServiceModal onClose={() => setActiveSection(null)} />
        )}
        {activeSection === 'barberModal' && (
          <AddBarberModal onClose={() => setActiveSection(null)} />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
