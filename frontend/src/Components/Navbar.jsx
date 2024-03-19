import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [userData, setUserData] = useState(null);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    setUserData(null);
  };

  console.log(userData.username)
  return (
    <nav className='flex justify-between items-center px-10 py-5 text-white bg-[#192537]'>
      <ul>
        <li>
          <img width="200px" src="https://mail.google.com/mail/u/0/?ui=2&ik=ecb044e4c5&attid=0.1&permmsgid=msg-f:1793961357071543018&th=18e56e597506eaea&view=fimg&disp=thd&attbid=ANGjdJ-MqIGQn_yh1YKD8EX-ilaNeSxf3DduQdSQo8HcjCGWB7yb39-E_BCPNgRca9b02IANkA1hHWpgBCp941mxlQGkOb6RRWLVrAv7OgSFQfrVcYdDZjLouivpQNE&ats=2524608000000&sz=w1920-h878" alt="" />
        </li>
      </ul>
     
        {!userData ? (
          <>
            <li><Link to="/signup">signup</Link></li>
            <li><Link to="/login">signin</Link></li>
          </>
        ) : (
          <>
          
            <ul className='flex items-center gap-5 justify-center '>
              <li><Link to="/">Home</Link></li>
              <li><Link>About</Link></li>
              <li><Link>Courses</Link></li>
              <li><Link to>Opportunity</Link></li>
            </ul>

            <ul className='flex items-center gap-5 justify-center'>
            <li className='text-white text-xl'>{userData.username}</li>
            <li>

              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                onClick={() => setDropdown(!dropdown)}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-14 h-14 rounded-full"
                  src={userData.avatar}
                  alt="user photo"
                />
              </button>
              {dropdown && (
                <div className='w-40 flex items-center justify-center h-20 bg-gray-100 absolute right-[8rem] top-[4rem]'>
                  <button onClick={handleLogout} className='bg-blue-700 text-white px-3 py-2 rounded'>
                    Logout
                  </button>
                </div>
              )}
            </li>
            </ul>
          </>
        )}
      
    </nav>
  );
}

export default Navbar;
