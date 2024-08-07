import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className='text-lg text-white'>MovieDb</div>
        <div className="hidden md:flex space-x-4 mt-2">
          <Link to="/" className="text-gray-500 text-lg">Popular</Link>
          <Link to="/top-rated" className="text-gray-500 text-lg">Top Rated</Link>
          <Link to="/upcoming" className="text-gray-500 text-lg">Upcoming</Link>
        </div>
        <div className="hidden md:flex items-center">
          <input
            type="text"
            placeholder="Movie Name"
            className="p-2 rounded"
          />
          <button className="bg-blue-500 p-2 ml-2 rounded">Search</button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-2">
          <Link to="/" className="text-gray-500 text-lg">Popular</Link>
          <Link to="/top-rated" className="text-gray-500 text-lg">Top Rated</Link>
          <Link to="/upcoming" className="text-gray-500 text-lg">Upcoming</Link>
          <div className="flex items-center mt-2">
            <input
              type="text"
              placeholder="Movie Name"
              className="p-2 rounded w-full"
            />
            <button className="bg-blue-500 p-2 ml-2 rounded">Search</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
