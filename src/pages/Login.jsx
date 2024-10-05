import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const loginHandler = (e) => {
    e.preventDefault();
    login(email);
    navigate('/');
  }

  return (
    <div className='h-full min-h-[90vh] flex justify-center items-center'>
      <div className='w-[500px] bg-white p-8 rounded'>
        <p className='text-2xl text-center font-bold'>Login</p>
        <span className='text-sm text-gray-500 text-center block my-1'>Fill in the details to login</span>
        <form onSubmit={loginHandler} className='mt-4'>
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
            Login
          </button>
        </form>
        <p className='text-sm my-2 text-center'>
          Don't have an account?
          <Link to="/signup" className='text-green-600 cursor-pointer font-semibold'> create one</Link>
        </p>
      </div>
    </div>
  );
}
