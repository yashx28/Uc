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
   
    <div className="bg-gray-900 flex h-screen w-screen  bg-cover bg-center relative"
       style={{
            backgroundImage: `url('https://img.freepik.com/free-vector/black-background-with-focus-spot-light_1017-27230.jpg?ga=GA1.1.1210140664.1747758452&semt=ais_hybrid&w=740')`, // replace with your image
        }}
        > 
    
      {/* Sidebar */}
      <div className=" h-screen w-96 ">
        <div className='p-5'>
           <Link  className='text-white text-xl' to='/' path={<Layout />} > ← </Link> 
        </div>
        
        <h1
          className="p-5  text-red-600 font-bold text-2xl ml-10 cursor-pointer hover:text-red-300 transition"
          onClick={handleToggle}
        >
          User Appointments
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1">
        {showBookings && (
         <ShowBooking />
        )}
      </div>
    </div>
   
  );
};

export default Dashboard;
