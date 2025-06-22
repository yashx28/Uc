import React, { useState } from 'react';
import axios from 'axios';

const EmailLogin = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);

  const sendOtp = async () => {
    await axios.post('/send-otp', { email });
    setStep(2);
  };

  const verifyOtp = async () => {
    const res = await axios.post('/verify-otp', { email, otp });
    alert(res.data.message);
    // navigate or set login token here
  };

  return (
    <div>
      {step === 1 ? (
        <>
          <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button onClick={sendOtp}>Send OTP</button>
        </>
      ) : (
        <>
          <input placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
          <button onClick={verifyOtp}>Verify OTP</button>
        </>
      )}
    </div>
  );
};

export default EmailLogin;
