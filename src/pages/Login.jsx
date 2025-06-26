import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EmailLogin = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);
  const [role, setRole] = useState('');
  const [sendingOtp, setSendingOtp] = useState(false);
  const [verifyingOtp, setVerifyingOtp] = useState(false);
  const navigate = useNavigate();

  const sendOtp = async () => {
    setSendingOtp(true);
    try {
      const res = await axios.post('https://uc-api-st0c.onrender.com/send-otp', { email });
      alert('OTP sent to your email');
      setRole(res.data.role);
      setStep(2);
    } catch (error) {
      alert('Failed to send OTP');
      console.error(error);
    } finally {
      setSendingOtp(false);
    }
  };

  const verifyOtp = async () => {
    setVerifyingOtp(true);
    try {
      const res = await axios.post('https://uc-api-st0c.onrender.com/verify-otp', { email, otp });
      const role = res.data.role;
      if (role === 'admin') {
        localStorage.setItem('role', 'admin');
        navigate('/');
      } else if (role === 'user') {
        localStorage.setItem('role', 'user');
        navigate('/');
      } else {
        alert('Invalid OTP or user not found');
      }
    } catch (err) {
      alert('OTP verification failed');
      console.error(err);
    } finally {
      setVerifyingOtp(false);
      setEmail('');
      setOtp('');
    }
  };

  const handle = () => {
    navigate('/signup');
  };

  return (
    <div
      className="flex h-screen w-screen items-center justify-center bg-cover bg-center relative px-4"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/client-doing-hair-cut-barber-shop-salon_1303-20710.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="relative z-10 bg-gray-900 bg-opacity-90 p-8 sm:p-10 rounded-2xl w-full max-w-md border border-emerald-600 text-white">
        <h1 className="text-3xl font-bold text-center mb-6">Login with OTP</h1>

        {step === 1 ? (
          <div className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-emerald-600 bg-transparent rounded-full outline-none"
              placeholder="Enter Your Email"
              required
            />
            <button
              onClick={sendOtp}
              disabled={sendingOtp}
              className={`w-full flex items-center justify-center gap-2 text-white py-2 rounded-full ${
                sendingOtp
                  ? 'bg-emerald-400 cursor-not-allowed'
                  : 'bg-emerald-600 hover:bg-emerald-700'
              }`}
            >
              {sendingOtp && (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              )}
              {sendingOtp ? 'Sending OTP...' : 'Send OTP'}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 border border-emerald-600 bg-transparent rounded-full outline-none"
              placeholder="Enter OTP"
              required
            />
            <button
              onClick={verifyOtp}
              disabled={verifyingOtp}
              className={`w-full flex items-center justify-center gap-2 text-white py-2 rounded-full ${
                verifyingOtp
                  ? 'bg-emerald-400 cursor-not-allowed'
                  : 'bg-emerald-600 hover:bg-emerald-700'
              }`}
            >
              {verifyingOtp && (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              )}
              {verifyingOtp ? 'Verifying...' : 'Verify OTP'}
            </button>
          </div>
        )}

        <div className="flex justify-center gap-1 mt-4 text-sm">
          <p className="text-red-400">Don't have an account?</p>
          <button onClick={handle} className="text-blue-500 underline">
            Sign Up
          </button>
        </div>

        <Link to="/" className="block text-center text-sm mt-4 text-white underline">
          ← Back
        </Link>
      </div>
    </div>
  );
};

export default EmailLogin;
