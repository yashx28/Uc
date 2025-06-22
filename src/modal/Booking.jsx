import React, { useState } from 'react';
import axios from 'axios';

const Booking = ({ onClose, service }) => {
  const [formData, setFormData] = useState({
    date: '',
    timeSlot: '',
    mode: '',
    name: '',
    email: '',
    address: '',
    phone: '',
    service: service?.name || '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  try {
    const res = await axios.post('http://localhost:3001/bookings', formData);
    alert(res.data.message || 'Booking confirmed!');
    onClose();
  } catch (err) {
    if (err.response && err.response.status === 409) {
      alert('Selected time slot is already booked. Please choose a different time.');
    } else {
      console.error(err);
      alert('Booking failed. Try again.');
    }
  }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-900 p-10 rounded-2xl w-full max-w-md text-white relative scrollbar-hide max-h-[90vh] border-2 border-emerald-600">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-red-500 transition"
        >
          ✕
        </button>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-center w-full">{service?.name}</h2>
        </div>

        <form className="flex flex-col items-center justify-center space-y-4" onSubmit={handleSubmit}>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required
            className="w-full px-3 py-2 border-2 border-emerald-600 bg-transparent text-white rounded-full outline-none" />
          
          <select name="timeSlot" value={formData.timeSlot} onChange={handleChange}
            className="w-full px-3 py-2 border-2 border-emerald-600 bg-transparent text-white rounded-full outline-none">
            <option className="bg-black text-white" value="">Select Time</option>
            <option className="bg-black text-white">1:30 PM - 2:00 PM</option>
            <option className="bg-black text-white">2:00 PM - 2:30 PM</option>
          </select>

          <select name="mode" value={formData.mode} onChange={handleChange}
            className="w-full px-3 py-2 border-2 border-emerald-600 bg-transparent text-white rounded-full outline-none">
            <option className="bg-black text-white" value="">Select Mode</option>
            <option className="bg-black text-white">Home Service</option>
            <option className="bg-black text-white">In-Salon</option>
          </select>

          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required
            className="w-full px-3 py-2 border-2 border-emerald-600 bg-transparent text-white rounded-full outline-none" />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required
            className="w-full px-3 py-2 border-2 border-emerald-600 bg-transparent text-white rounded-full outline-none" />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required
            className="w-full px-3 py-2 border-2 border-emerald-600 bg-transparent text-white rounded-full outline-none" />
          <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required
            className="w-full px-3 py-2 border-2 border-emerald-600 bg-transparent text-white rounded-full outline-none" />

          <button type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-full mt-2">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
