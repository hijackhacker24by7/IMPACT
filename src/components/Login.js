// login page with form to input username and password using tailwindcss and responsive design


import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('username:', username);
    console.log('password:', password);
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-200'>
      <div >
        
      <h2 className='text-3xl font-bold mb-10 text-gray-800'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label htmlFor='username' className='block text-gray-800 font-medium'>
              Username
            </label>
            <input
              type='text'
              id='username'
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='w-full p-3 rounded bg-gray-200 mt-1'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='password' className='block text-gray-800 font-medium'>
              Password
            </label>
            <input
              id='password'
              name='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full p-3 rounded bg-gray-200 mt-1'
            />
          </div>
          <button type='submit' className='w-full py-3 mt-6 bg-indigo-600 rounded text-white hover:bg-indigo-500'>
            Login
          </button>
        </form>
        
     

      </div>
    </div>
  );
};

export default Login;