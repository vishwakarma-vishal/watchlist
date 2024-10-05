import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen relative">

      {/* Mobile Menu Toggle Button */}
      <button
        className="block md:hidden p-2 sm:p-3 bg-gray-800 text-white fixed bottom-2 left-2 z-50 rounded"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ?
          <AiOutlineClose className="text-xl sm:text-2xl" /> :
          <AiOutlineMenu className="text-xl sm:text-2xl" />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-white border transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 md:static md:translate-x-0 md:w-1/5 md:h-screen z-40`}
      >
        <Sidebar />
      </div>

      {/* Main section*/}
      <main 
      className="w-full h-screen md:w-4/5 p-4 bg-gray-100 overflow-y-scroll scrollbar scrollbar-thin scrollbar-corner-red-500">
        <Outlet />
      </main>

      {/* Overlay for closing the sidebar on mobile when open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar} // Close sidebar when overlay is clicked
        ></div>
      )}
    </div>
  );
};