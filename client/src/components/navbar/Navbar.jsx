import React from 'react';
//import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          {/*<Link to="/" className="flex items-center">*/}
            {/*  <img src={logo} alt="Store Logo" className="w-8 h-8" />  */}
            <span className="text-lg font-bold">Threads:Resurrected</span>
          {/*</Link>*/}
        </div>
        <div className="flex items-center space-x-4">
          {/* Category dropdown menu */}
          <div className="relative">
            {/* Dropdown menu trigger */}
            <button className="text-gray-600 hover:text-gray-800">
              Browse categories
            </button>
            {/* Dropdown menu with categories */}
          </div>
          {/* Search bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 border"
            />
            {/* Add search icon */}
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        
        {/* Account icon */}
  {/* <Link to="/account">
    // Add account icon
  </Link> */}
  {/* Heart icon */}
  {/* <Link to="/wishlist">
    // Add heart icon
  </Link> */}
  {/* Cart icon */}
  {/* <Link to="/cart">
    // Add cart icon
  </Link> */}

      </div>
    </nav>
  );
};

export default Navbar;

