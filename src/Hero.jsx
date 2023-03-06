import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <div className="hero">
      <a href="#" className="jumpStartLink">
        Jump Start your portfolio
      </a>
      <h1>
        Jump start your crypto
        <br /> portfolio
      </h1>
      <p>
        Coinbase is the easiest place to buy and sell cryptocurrency. Sign up
        and get started today.
      </p>
      <input type="text" placeholder="Email Address" />
      <button>Get Started</button>
    </div>
  );
}
