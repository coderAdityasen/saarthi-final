import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 

function Signin() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password ) {
      setError('Please fill out all fields.');
      return;
    }
    try {
      setLoading(true);
      const res = await axios.post('http://localhost:8000/api/v1/users/login', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.data.success === true) {
        setLoading(false);
        setError('');
        // Save user data to local storage upon successful login
        localStorage.setItem('userData', JSON.stringify(res.data.data));
        navigate("/home");
      } else {
        setLoading(false);
        setError(res.data.message || 'Sign in failed. Please try again.');
      }
    } catch (error) {
      setLoading(false);
      setError('An error occurred during sign in. Please try again later.');
    }
  };

  return (
    <>
      <div className='min-h-screen mt-20'>
        <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
          {/* left */}
          <div className='flex-1'>
            <div className='font-bold dark:text-white text-4xl'>
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                Saarthi
              </span>
            </div>
          </div>
          {/* right */}
          <div className='flex-1'>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
             
              <div>
                <label htmlFor='email' />
                <input
                  type='email'
                  placeholder='name@company.com'
                  id='email'
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor='password' />
                <input
                  type='password'
                  placeholder='Password'
                  id='password'
                  onChange={handleChange}
                />
              </div>
              
              <button id='' className='bg-black text-white' type='submit' disabled={loading}>
                {loading ? <span className='pl-3'>Loading...</span> : 'Sign in'}
              </button>
              
              {error && <p className="text-red-500">{error}</p>}
            </form>
            <div className='flex gap-2 text-sm mt-5'>
              <span>Don't have an account?</span>
              <Link to='/signup' className='text-blue-500'>
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
