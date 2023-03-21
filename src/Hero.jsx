import React, { useState } from 'react';
import './Hero.css';
import eth from './assets/eth.png';
export default function Hero() {
  const [email, setEmail] = useState('');
  return (
    <div className="hero">
      <a href="#" className="jumpStartLink">
        <img src={eth} alt="" /> Jump Start your portfolio -{'>'}
      </a>
      <h1>
        Jump start your
        <br /> crypto portfolio
      </h1>
      <p>
        Bittrue is the easiest place to buy and sell cryptocurrency. Sign up and
        get started today.
      </p>
      <input
        type="text"
        placeholder="Email Address"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setEmail('');
        }}
      >
        Get Started
      </button>
    </div>
  );
}
