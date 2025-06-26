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

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleTimeChange = (e) => {
    const [hours, minutes] = e.target.value.split(':').map(Number);
    const startTime = new Date();
    startTime.setHours(hours, minutes, 0, 0);

    const endTime = new Date(startTime.getTime() + 60 * 60 * 1000); // 1 hour slot

    const formatTime = (date) =>
      date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

    const timeRange = `${formatTime(startTime)} - ${formatTime(endTime)}`;

    setFormData((prev) => ({ ...prev, timeSlot: timeRange }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const startTime12 = formData.timeSlot.split(' - ')[0];
      const userTime24 = new Date(`1970-01-01T${new Date(`2000-01-01 ${startTime12}`).toTimeString().slice(0, 8)}`);

      const checkResponse = await axios.get('https://uc-api-st0c.onrender.com/bookings/check', {
        params: {
          date: formData.date,
          time: userTime24.toTimeString().substring(0, 5), // HH:mm format
        },
      });

      if (!checkResponse.data.available) {
        alert('This time slot is already booked. Please choose another time.');
        return;
      }

      const bookingResponse = await axios.post('https://uc-api-st0c.onrender.com/bookings', formData);
      alert(bookingResponse.data.message || 'Booking confirmed!');
      onClose();
    } catch (err) {
      console.error(err);
      alert('Booking failed. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center px-4">
      <div className="bg-gray-900 p-6 sm:p-8 md:p-10 rounded-2xl w-full max-w-md text-white relative border-2 border-emerald-600 max-h-[90vh] overflow-y-auto">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-red-500 transition"
        >
          ✕
        </button>

        <div className="mb-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">{service?.name || 'Booking'}</h2>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            required
            className="w-full px-4 py-2 border-2 border-emerald-600 bg-transparent text-white rounded-full outline-none text-sm sm:text-base"
          />

          <input
            type="time"
            name="timeSlot"
            onChange={handleTimeChange}
            required
            className="w-full px-4 py-2 border-2 border-emerald-600 bg-transparent text-white rounded-full outline-none text-sm sm:text-base"
          />

          <select
            name="mode"
            value={formData.mode}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border-2 border-emerald-600 bg-transparent text-white rounded-full outline-none text-sm sm:text-base"
          >
            <option className="bg-black text-white" value="">Select Mode</option>
            <option className="bg-black text-white">Home Service</option>
            <option className="bg-black text-white">In-Salon</option>
          </select>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border-2 border-emerald-600 bg-transparent text-white rounded-full outline-none text-sm sm:text-base"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border-2 border-emerald-600 bg-transparent text-white rounded-full outline-none text-sm sm:text-base"
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border-2 border-emerald-600 bg-transparent text-white rounded-full outline-none text-sm sm:text-base"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border-2 border-emerald-600 bg-transparent text-white rounded-full outline-none text-sm sm:text-base"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-full text-sm sm:text-base mt-2 ${
              loading
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white'
            }`}
          >
            {loading ? 'Booking...' : 'Book Now'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
