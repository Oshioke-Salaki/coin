import React from 'react';
import './GetStarted.css';

export default function GetStarted() {
  return (
    <div className="getStarted">
      <h1>
        Get started in a few
        <br /> minutes
      </h1>
      <h2>
        Coinbase supports a variety of the most popular digital
        <br /> currencies.
      </h2>
      <div className="startStep">
        <h3>Create an account</h3>
      </div>
      <div className="startStep">
        <h3>Link your bank account</h3>
      </div>
      <div className="startStep">
        <h3>Start buying & selling</h3>
      </div>

      <div className="discover">
        <h4>
          Earn up to $25 worth
          <br /> of crypto
        </h4>
        <p>
          Discover how specific
          <br /> cryptocurrencies work — and get a bit of each crypto to try out
          for yourself.
        </p>
        <a href="#">Start Earning</a>
      </div>
    </div>
  );
}
