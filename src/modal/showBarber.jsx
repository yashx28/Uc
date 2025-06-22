import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowBarber = () => {
  const [barbers, setBarbers] = useState([]);

  const fetchBarbers = async () => {
    try {
      const res = await axios.get('http://localhost:3001/barbers');
      setBarbers(res.data);
    } catch (err) {
      console.error('Error fetching barbers:', err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this barber?')) {
      try {
        await axios.delete(`http://localhost:3001/delete-barber/${id}`);
        fetchBarbers(); // Refresh after delete
      } catch (err) {
        console.error('Error deleting barber:', err);
        alert('Failed to delete barber.');
      }
    }
  };

  useEffect(() => {
    fetchBarbers();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6 mt-10 text-center text-white">All Barbers</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 text-white rounded-lg">
          <thead>
            <tr className="bg-red-600 text-white">
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {barbers.length > 0 ? (
              barbers.map((barber) => (
                <tr key={barber._id} className="border-t border-gray-700">
                  <td className="py-2 px-4">{barber.name}</td>
                  <td className="py-2 px-4">{barber.email}</td>
                  <td className="py-2 px-4 text-center">
                    <button
                      onClick={() => handleDelete(barber._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-full"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-4">
                  No barbers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowBarber;
