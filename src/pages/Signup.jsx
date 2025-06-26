import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handle = () => {
    navigate('/login');
  };

  const SubmitEvent = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const response = await axios.post('https://uc-api-st0c.onrender.com/signup', {
        name,
        email,
        password,
      });

      alert(response.data.message);

      if (response.data.message === 'Signup successful') {
        navigate('/login');
      }
    } catch (error) {
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert('Something went wrong');
      }
      console.error(error);
    } finally {
      setLoading(false); // Stop loading
      setEmail('');
      setPassword('');
      setName('');
    }
  };

  return (
    <div
      className="flex h-screen w-screen items-center justify-center bg-cover bg-center relative px-4"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/client-doing-hair-cut-barber-shop-salon_1303-20710.jpg')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="relative z-10 bg-gray-900 bg-opacity-90 p-8 sm:p-10 rounded-2xl w-full max-w-md border border-emerald-600 text-white">
        <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>

        <form
          onSubmit={SubmitEvent}
          className="flex flex-col items-center justify-center space-y-4"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-emerald-600 bg-transparent rounded-full outline-none"
            placeholder="Enter Your Name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-emerald-600 bg-transparent rounded-full outline-none"
            placeholder="Enter Your Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-emerald-600 bg-transparent rounded-full outline-none"
            placeholder="Enter Your Password"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white py-2 rounded-full mt-2 ${
              loading
                ? 'bg-emerald-400 cursor-not-allowed'
                : 'bg-emerald-600 hover:bg-emerald-700'
            }`}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

        <div className="flex justify-center gap-1 mt-4 text-sm">
          <p className="text-red-400">Already have an account?</p>
          <button onClick={handle} className="text-blue-500 underline">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
