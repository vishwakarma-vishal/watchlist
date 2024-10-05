import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { BsThreeDots } from "react-icons/bs";
import { FaHome, FaFilm } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

export const Sidebar = () => {
  const { isLoggedIn, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const logoutHandler = () => {
    logout();
    setIsMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`); // Navigate to search page with query
      setSearchQuery(''); // Clear the input after search
    }
  };

  return (
    <div className='fixed h-full'>
      <div className=" p-4 h-full flex flex-col justify-between">
        <div className='space-y-3'>
          <h1 className='text-2xl lg:text-3xl text-red-500 font-bold p-2'>Watchlists</h1>

          <form
            onSubmit={handleSearch}
            className='border-2 rounded-md px-1 py-2 flex items-center gap-2 w-full'>
            <div className='w-6 flex justify-center'>
              <CiSearch className='text-xl text-gray-500 cursor-pointer' />
            </div>
            <input
              type='text'
              placeholder='Search'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='w-full outline-none'
            />
          </form>

          <ul className="space-y-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block p-2 rounded w-full ${isActive ? 'bg-red-500 text-white' : 'text-black hover:bg-red-500 hover:text-white'}`
                }
              >
                <div className="flex items-center">
                  <FaHome className="mr-2 text-xl" />
                  <span>Home</span>
                </div>
              </NavLink>
            </li>
            <hr />
            <li>
              <NavLink
                to="/watchlist"
                className={({ isActive }) =>
                  `block p-2 rounded w-full ${isActive ? 'bg-red-500 text-white' : 'text-black hover:bg-red-500 hover:text-white'}`
                }
              >
                <div className="flex items-center">
                  <FaFilm className="mr-2 text-xl" />
                  <span>Watchlist</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className='relative'>
          <div className='my-4 flex gap-2 border border-gray-300 items-center py-3 px-2 rounded-md'>
            <CgProfile
              className={`text-3xl text-gray-500 ${isLoggedIn ? 'text-green-500' : ''}`}
            />
            <p
              className={`text-md text-gray-500 font-semibold ${isLoggedIn ? 'text-green-500' : ''}`}>
              {isLoggedIn ? 'User' : 'Guest'}
            </p>
            <BsThreeDots className='ml-auto text-xl cursor-pointer' onClick={toggleMenu} />
          </div>

          {isMenuOpen && (
            <div className='absolute right-0 bottom-full w-32 bg-white border rounded-lg shadow-lg p-2 transform transition-all duration-300 linear'>
              {isLoggedIn ? (
                <button
                  className='w-full text-left px-4 py-2 text-sm hover:bg-red-400 hover:text-white rounded'
                  onClick={logoutHandler}
                >
                  Logout
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      navigate('/login');
                      setIsMenuOpen(false);
                    }}
                    className='w-full text-left px-4 py-2 text-sm hover:bg-green-500 hover:text-white rounded'>
                    Login
                  </button>
                  <button
                    onClick={() => {
                      navigate('/signup');
                      setIsMenuOpen(false);
                    }}
                    className='w-full text-left px-4 py-2 text-sm hover:bg-red-500 hover:text-white rounded'>
                    Sign Up
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};