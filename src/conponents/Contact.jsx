import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post('https://uc-api-st0c.onrender.com/contact', formData);
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      alert("Failed to send message.");
    }
  };

  return (
    <div 
      className='bg-gray-800 bg-cover bg-center min-h-screen flex items-center justify-center p-4'
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-photo/hair-clipper-black-background_78621-3865.jpg?ga=GA1.1.1210140664.1747758452&semt=ais_hybrid&w=740')`,
      }}
    >
      <div className="w-full max-w-2xl bg-black/60 p-8 rounded-xl text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-transparent border border-gray-400 rounded-full outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-transparent border border-gray-400 rounded-full outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-2 bg-transparent border border-gray-400 rounded-xl outline-none resize-none"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
