import { FaTachometerAlt, FaFileAlt, FaBriefcase } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="relative w-64 h-full bg-gray-900 text-white">
      <div className="w-64 h-full bg-gray-900 text-white">
        
        <div className="flex justify-between items-center p-4 bg-gray-800">
          <span className="text-lg font-bold">WhatBytes</span>
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
