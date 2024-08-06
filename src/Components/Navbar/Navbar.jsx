import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logoo.png';
import cart_icon from '../assets/cart_icon.png';

export const Navbar = () => {
  const location = useLocation();
  const [menu, setMenu] = useState(location.pathname);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <Link to="/" className="logo-link"> 
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="nav-login-cart">
        <Link to="/Засварын төв" className={menu === '/Засварын төв' ? 'active' : ''}>
          <span onClick={() => setMenu('/Засварын төв')}>Засварын төв</span>
        </Link>
        <Link to="/Сэлбэг" className={menu === '/Сэлбэг' ? 'active' : ''}>
          <span onClick={() => setMenu('/Сэлбэг')}>Сэлбэг</span>
        </Link>
        <Link to="/login">Нэвтрэх</Link>
        <Link to="/register">Бүртгүүлэх</Link>
        <Link to="/Card" className="Card-icon">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">9</div>
      </div>
    </div>
  );
};

export default Navbar;
