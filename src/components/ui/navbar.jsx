'use client';
import React from 'react';
import '../../Styles/navbar.css';

export default function Navbar() {
  return (
    <>
     {/*first row*/}
      <div className="top-nav">
        <div className="logo">E-Commerce</div>

        <div className="search-bar">
          <input type="text" placeholder="search for item" />
          <button>🔍</button>
        </div>

        <div className="nav-links">
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Login</a>
          <a href="#">Register</a>
        </div>
      </div>

     {/*second row*/}
      <div className="bottom-nav">
        <div className="nav-categories">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Categories</a>
          <a href="#">New Dealz</a>
        </div>
        <div className="action-buttons">
          <button>Checkout</button>
          <button>Wishlist</button>
          <button>My Cart </button>
        </div>
      </div>
    </>
  );
}
