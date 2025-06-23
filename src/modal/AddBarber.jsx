import React, { useState } from 'react';
import axios from 'axios';

const AddBarberModal = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !image) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const newBarber = {
        name,
        email,
        image,
      };

      const res = await axios.post('https://uc-api-st0c.onrender.com/addbarber', newBarber);

      if (res.status === 201) {
        alert('Barber added successfully!');
        onClose(); // Close modal
      }
    } catch (error) {
      console.error('Error adding barber:', error);
      alert('Failed to add barber.');
    }
  };

  return (
    <div className="p-20 flex justify-center items-center">
      <div className="bg-gray-900 p-10 rounded-2xl w-full max-w-lg border-2 border-red-600 text-white space-y-4">
        <h2 className="text-3xl font-bold text-center">Add A Barber</h2>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-full px-4 py-2 border-2 border-emerald-600 bg-transparent outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full px-4 py-2 border-2 border-emerald-600 bg-transparent outline-none"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="rounded-full px-4 py-2 border-2 border-emerald-600 bg-transparent outline-none"
          />
          <button type="submit" className="bg-red-600 hover:bg-red-700 py-2 rounded-full">
            Add Barber
          </button>
        </form>
        <button onClick={onClose} className="text-red-400 text-sm underline mt-2 text-center">
          Close
        </button>
      </div>
    </div>
  );
};

export default AddBarberModal;
