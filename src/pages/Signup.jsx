import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handle = () => {
    navigate('/login');
  };

  const SubmitEvent = async (e) => {
    e.preventDefault();
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
    if (error.response && error.response.data && error.response.data.message) {
      alert(error.response.data.message); // show "Already Have account"
    } else {
      alert('Something went wrong');
    }
    console.error(error);
  }
      setEmail('')
      setPassword('')
      setName('')
  };

  return (
    <div className="flex h-screen w-screen items-center justify-start bg-black bg-opacity-50  bg-cover bg-center relative"
      style={{
            backgroundImage: `url('https://img.freepik.com/free-photo/client-doing-hair-cut-barber-shop-salon_1303-20710.jpg?ga=GA1.1.1210140664.1747758452&semt=ais_hybrid&w=740')`, // replace with your image
        }}> 
        
      <div className="bg-gray-900 opacity-85 p-10 ml-10  rounded-2xl w-full max-w-md border-2 border-emerald-600 text-white">
        <div className="flex justify-center mb-6">
          <h1 className="text-3xl font-bold text-center">Sign Up</h1>
        </div>
        <form
          onSubmit={SubmitEvent}
          className="flex flex-col items-center justify-center space-y-4"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border-2 border-emerald-600 bg-transparent rounded-full outline-none"
            placeholder="Enter Your Name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border-2 border-emerald-600 bg-transparent rounded-full outline-none"
            placeholder="Enter Your Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border-2 border-emerald-600 bg-transparent rounded-full outline-none"
            placeholder="Enter Your Password"
            required
          />
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-full mt-2"
          >
            Sign Up
          </button>
        </form>
        <div className="flex justify-center gap-1 mt-4">
          <p className="text-sm text-red-400">Already have an account?</p>
          <button onClick={handle} className="text-blue-500 text-sm underline">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
