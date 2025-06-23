import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowBooking = () => {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const res = await axios.get('https://uc-api-st0c.onrender.com/bookings');
      setBookings(res.data);
    } catch (err) {
      console.error('Error fetching bookings:', err);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6 mt-10 text-center text-white">All Bookings</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 text-white rounded-lg">
          <thead>
            <tr className="bg-red-600 text-white">
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Time Slot</th>
              <th className="py-2 px-4 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <tr key={booking._id} className="border-t border-gray-700">
                  <td className="py-2 px-4">{booking.name}</td>
                  <td className="py-2 px-4">{booking.timeSlot}</td>
                  <td className="py-2 px-4">{booking.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-4">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowBooking;
