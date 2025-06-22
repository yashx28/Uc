import React from 'react';
import Layout from './Layout';
import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';

const App = () => {
  
  return (
  <Routes>
    <Route path='/' element={<Layout />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/login' element={<Login />} />
    <Route path='/admindashboard' element={<AdminDashboard />} />
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/Layout' element={<Layout />} />
  </Routes>

  )

};

export default App;
