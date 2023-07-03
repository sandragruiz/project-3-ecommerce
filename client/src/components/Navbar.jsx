import React from 'react';

const Navbar = () => {
  
    return (
    <div className='fixed w-full h-[100px] flex justify-between items-center px-4'>
      <div>
        {/* add logo */}
      </div>
      
      {/* menu */}
      <div>
        <ul className='hidden md:flex'>
          <li>
            <a href='#about'>About Me</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
  
      {/* mobile navbar settings */}
      
  
    </div>
    );
};

export default Navbar;

