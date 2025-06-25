import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Booking from '../modal/Booking';
import { FaTimes } from 'react-icons/fa'; // install via `npm install react-icons`

const Service = () => {
  const [services, setServices] = useState([]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get('https://uc-api-st0c.onrender.com/services');
        setServices(res.data);
      } catch (err) {
        console.error('Error fetching services:', err);
      }
    };

    fetchServices();
  }, []);

  const handleAddService = (service) => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingOpen(false);
    setSelectedService(null);
  };

  const handleDeleteService = async (id) => {
    const confirm = window.confirm('Are you sure you want to delete this service?');
    if (!confirm) return;

    try {
      await axios.delete(`https://uc-api-st0c.onrender.com/services/${id}`);
      setServices(services.filter(service => service._id !== id));
    } catch (err) {
      console.error('Error deleting service:', err);
      alert('Failed to delete service');
    }
  };

  return (
    <div id="services" className="min-h-screen w-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/modern-background-with-lines_1361-3533.jpg')`,
      }}
    >
      <div className='p-5 '>
        <h1 className='text-white text-5xl font-bold'>Services</h1>
      </div>

      <div className="p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {services.map((service) => (
          <div key={service._id} className="bg-transparent relative rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <button
              onClick={() => handleDeleteService(service._id)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 z-10"
              title="Delete service"
            >
              <FaTimes size={20} />
            </button>
            <img src={service.image} alt={service.name} className="w-full h-54 bg-cover bg-center" />
            <div className="p-4">
              <h3 className="text-xl text-white font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-400 mb-4">Price: {service.price}</p>
              <button
                onClick={() => handleAddService(service)}
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
              >
                Add Service
              </button>
            </div>
          </div>
        ))}
      </div>

      {isBookingOpen && (
        <Booking
          service={selectedService}
          onClose={closeBookingModal}
        />
      )}
    </div>
  );
};

export default Service;
