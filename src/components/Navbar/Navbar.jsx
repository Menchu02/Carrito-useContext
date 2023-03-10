import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <div className='nav-container'>
        <nav className='navbar'>
          <h1 className='navbar-logo'>Shop.</h1>
          <Link to={'/cart'}>
            <BsCart2 className='logo' />
          </Link>
        </nav>
      </div>
    </div>
  );
}
