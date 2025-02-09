import { Link } from 'react-router-dom';
import React from 'react';
import "./../../index.css";

function Navbar() {
  return (
    <div className='flex justify-center gap-[200px] px-10 py-2 bg-gray-800 text-white'>  
        <Link to='/'>Home</Link>
        <Link to='/aboutus'>About</Link>
        <Link to='/contactus'>Contact</Link>
        <Link to='/spot'>Dashbord</Link>


    </div>
  );
}
export default Navbar;