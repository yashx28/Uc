import React, { useState } from 'react';
import axios from 'axios';

const AddServiceModal = ({ onClose }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name || !price || !image) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const newService = {
        name,
        price,
        image,
      };

      const res = await axios.post('http://localhost:3001/addservice', newService);

      if (res.status === 201) {
        alert('Service added successfully!');
        onClose(); // Close modal after success
      }
    } catch (error) {
      console.error('Error adding service:', error);
      alert('Failed to add service.');
    }
  };

  return (
    <div className="p-20 flex justify-center items-center">
      <div className="bg-gray-900 p-10 rounded-2xl w-full max-w-lg border-2 border-red-600 text-white space-y-4">
        <h2 className="text-3xl font-bold text-center">Add A Service</h2>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-full px-4 py-2 border-2 border-emerald-600 bg-transparent outline-none"
          />
          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
            Add Service
          </button>
        </form>
        <button onClick={onClose} className="text-red-400 text-sm underline mt-2 text-center">
          Close
        </button>
      </div>
    </div>
  );
};

export default AddServiceModal;
