import React from 'react';
import './Navbar.css';
import hamburger from './assets/hamburger.png';

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>bittrue</h1>
      <div className="navbarRight">
        <a href="#">Get Started</a>
        <div class="menu-wrap">
          <input type="checkbox" class="toggler" />
          <div class="hamburger">
            <div></div>
          </div>
          <div class="menu">
            <div>
              <div>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
