import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Signup = () => {
  const { login } = useAuth(); 
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');

  const signupHandler = (e) => {
    e.preventDefault();
    login(email);  
    navigate('/'); 
  };

  return (
    <div className='h-full min-h-[90vh] flex justify-center items-center'>
      <div className='w-[500px] bg-white p-8 rounded-sm'>
        <p className='text-2xl text-center font-bold'>Sign Up</p>
        <span className='text-sm text-gray-500 text-center block my-1'>Fill in the details to create an account</span>
        <form onSubmit={signupHandler} className='mt-4'>
          <label className='block text-gray-900 mr-2 mb-2'>Email</label>
          <input
            type="email"
            placeholder='abc@gmail.com'
            required
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className='border p-2 w-full outline-none rounded-sm'
          /><br />
          <button
            type='submit'
            className='mt-4 bg-green-500 text-white py-2 px-6 rounded'
          >
            Sign Up
          </button>
        </form>
        <p className='text-sm my-2 text-center'>
          Already have an account? 
          <Link to="/login" className='text-green-600 cursor-pointer font-semibold'> login here</Link>
        </p>
      </div>
    </div>
  );
};
