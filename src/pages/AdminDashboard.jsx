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
  const Appointment = () => {
    setActiveSection('Appointment')
  };
  const ManageUser = () => {
   setActiveSection('ManageUser')
  };
  const ManageBarber = () => {
   setActiveSection('ManageBarber')
  };
  const BookingList = () => {
    setActiveSection('bookings')
  };
  const AddService = () => {
    setActiveSection('serviceModal')
  };
  const AddBarber = () => {
   setActiveSection('barberModal')
  };

  return (
    <div className="bg-gray-900 flex h-screen w-screen bg-cover bg-center relative"
     style={{
            backgroundImage: `url('https://img.freepik.com/free-vector/black-background-with-focus-spot-light_1017-27230.jpg?ga=GA1.1.1210140664.1747758452&semt=ais_hybrid&w=740')`, // replace with your image
        }}>
    
      <div className="p-5 h-screen w-96 bg-transparent">
          <div className='p-5'>
           <Link  className='text-white text-xl' to='/' path={<Layout />}  > ← </Link> 
        </div>
        
        <h1
          className="text-red-400 font-semibold text-3xl ml-6 cursor-pointer hover:text-red-300 transition"
          onClick={Appointment}
        >
          My Appointments
        </h1>
        <h1
          className="text-white text-xl ml-6 mt-10  cursor-pointer hover:text-blue-300 transition"
          onClick={ManageUser}
        >
         Manage All User
        </h1>
        <h1
          className="text-white text-xl ml-6 mt-6 cursor-pointer hover:text-blue-300 transition"
          onClick={ManageBarber}
        >
          Manage All Barber
        </h1>
        <h1
          className="text-white text-xl ml-6 mt-6  cursor-pointer hover:text-blue-300 transition"
          onClick={BookingList}
        >
         Booking List
        </h1>
        <h1
          className="text-white text-xl ml-6 mt-6  cursor-pointer hover:text-blue-300 transition"
          onClick={AddService}
        >
         Add New Services
        </h1>
        <h1
          className="text-white text-xl ml-6 mt-6  cursor-pointer hover:text-blue-300 transition"
          onClick={AddBarber}
        >
          Add New Barber
        </h1>
       
      </div>

      {/* Content */}
     <div className="flex-1">
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
