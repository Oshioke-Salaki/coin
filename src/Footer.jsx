import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <h1>Bittrue</h1>
      <div className="language">
        <select name="select" id="select">
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
        </select>
      </div>
      <h2>&copy; 2022 Bittrue</h2>
      <h3>Company</h3>
      <h4>About</h4>
      <h4>Careers</h4>
      <h4>Affliates</h4>
      <h4>Blog</h4>
      <h4>Press</h4>
      <h4>Security</h4>
      <h3>Learn</h3>
      <h4>Ethereum Merge</h4>
      <h4>Browse crypto prices</h4>
      <h4>Coinbase Bytes newsletter</h4>
      <h4>What is Bitcoin?</h4>
      <h4>What is crypto?</h4>
    </div>
  );
}
