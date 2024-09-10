import { useState } from 'react';
import { FaTachometerAlt, FaFileAlt, FaBriefcase } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        className="md:hidden p-4 bg-gray-800 text-white" 
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </button>

      <div className={`fixed md:relative z-10 w-64 h-full bg-gray-900 text-white md:translate-x-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        

        <div className="flex justify-between items-center p-4 bg-gray-800">
          <span className="text-lg font-bold">WhatBytes</span>
          <button className="md:hidden" onClick={() => setIsOpen(false)}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <ul>
          <li className="flex items-center p-4 hover:bg-gray-700 transition">
            <FaTachometerAlt className="mr-3" />
            <a href="#">Dashboard</a>
          </li>
          <li className="flex items-center p-4 hover:bg-gray-700 transition">
            <FaFileAlt className="mr-3" />
            <a href="#">Skill Test</a>
          </li>
          <li className="flex items-center p-4 hover:bg-gray-700 transition">
            <FaBriefcase className="mr-3" />
            <a href="#">Internship</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
