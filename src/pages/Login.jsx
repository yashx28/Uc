import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EmailLogin = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const sendOtp = async () => {
    try {
    const res = await axios.post('http://localhost:3001/send-otp', { email });
alert('OTP sent to your email');
setRole(res.data.role); // ✅ now this will work

      setStep(2);
    } catch (error) {
      alert('Failed to send OTP');
      console.error(error);
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await axios.post('http://localhost:3001/verify-otp', { email, otp });
      const role = res.data.role;
  console.log(role)
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
    }

    setEmail('');
    setOtp('');
  };

  const handle = () => {
    navigate('/signup');
  };

  return (
    <div
      className="flex h-screen w-screen items-center justify-start bg-opacity-50 bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/client-doing-hair-cut-barber-shop-salon_1303-20710.jpg?ga=GA1.1.1210140664.1747758452&semt=ais_hybrid&w=740')`,
      }}
    >
      <div className="bg-gray-900 opacity-85 p-10 ml-10 rounded-2xl w-full max-w-md border-2 border-emerald-600 text-white">
        <div className="flex justify-center mb-6">
          <h1 className="text-3xl font-bold text-center">Login with OTP</h1>
        </div>

        {step === 1 ? (
          <div className="flex flex-col items-center justify-center space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border-2 border-emerald-600 bg-transparent rounded-full outline-none"
              placeholder="Enter Your Email"
              required
            />
            <button
              onClick={sendOtp}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-full mt-2"
            >
              Send OTP
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-4">
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-3 py-2 border-2 border-emerald-600 bg-transparent rounded-full outline-none"
              placeholder="Enter OTP"
              required
            />
            <button
              onClick={verifyOtp}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-full mt-2"
            >
              Verify OTP
            </button>
          </div>
        )}

        <div className="flex justify-center gap-1 mt-4">
          <p className="text-sm text-red-400">Don't have an account?</p>
          <button onClick={handle} className="text-blue-500 text-sm underline">
            Sign Up
          </button>
        </div>

        <Link to="/" className="text-sm text-white underline mt-4 block text-center">← Back</Link>
      </div>
    </div>
  );
};

export default EmailLogin;




// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Layout from '../Layout';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

// const SubmitEvent = async (e) => {
//   e.preventDefault();
//    try {
//       const res =  await axios.post('http://localhost:3001/login', { email, password });
//       console.log(res)

//       if (res.data === 'admin') {
//          localStorage.setItem('role', 'admin');
//         navigate('/'); // Navigate to layout for admin
//       } else if (res.data === 'user') {
//         localStorage.setItem('role', 'user');
//         navigate('/'); // Navigate to layout for regular user
//       }
//     } catch (err) {
//       alert('Login failed: Invalid credentials');
//       console.error(err);
//     }
    
//     setEmail('');
//     setPassword('');
//   };



//   const handle = () => {
//     navigate('/signup');
//   };

//   return (
//     <div className="flex h-screen w-screen items-center justify-start   bg-opacity-50  bg-cover bg-center relative"
//      style={{
//             backgroundImage: `url('https://img.freepik.com/free-photo/client-doing-hair-cut-barber-shop-salon_1303-20710.jpg?ga=GA1.1.1210140664.1747758452&semt=ais_hybrid&w=740')`, // replace with your image
//         }}> 
//       <div className="bg-gray-900 opacity-85 p-10 ml-10 rounded-2xl w-full max-w-md border-2 border-emerald-600 text-white">
//         <div className="flex justify-center mb-6">
//           <h1 className="text-3xl font-bold text-center">Login</h1>
//         </div>
//         <form
//           onSubmit={SubmitEvent}
//           className="flex flex-col items-center justify-center space-y-4"
//         >
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-3 py-2 border-2 border-emerald-600 bg-transparent rounded-full outline-none"
//             placeholder="Enter Your Email"
//             required
//           />
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-3 py-2 border-2 border-emerald-600 bg-transparent rounded-full outline-none"
//             placeholder="Enter Your Password"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-full mt-2"
//           >
//             Login
//           </button>
//         </form>
//         <div className="flex justify-center gap-1 mt-4">
//           <p className="text-sm text-red-400">Don't have an account?</p>
//           <button onClick={handle} className="text-blue-500 text-sm underline">
//             Sign Up
//           </button>
//         </div >
        

//          <Link  to='/' path={<Layout />} > ← </Link> 
    
//       </div>
   

//     </div>
//   );
// }

// export default Login;
