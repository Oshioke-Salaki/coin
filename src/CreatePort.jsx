import React from 'react';
import './CreatePort.css';
import ill1 from './assets/img.webp';

export default function CreatePort() {
  return (
    <div className="createPort">
      <h1>
        Create your
        <br /> cryptocurrency
        <br /> portfolio today
      </h1>
      <h2>
        Coinbase has a variety of features that make it the best place
        <br /> to start trading
      </h2>
      <img src={ill1} alt="" className="illus" />
      <div className="property">
        <div className="propImg">
          <img src="" alt="" />
        </div>
        <h3>Manage your portfolio</h3>
        <h2>
          Buy and sell popular digital currencies, keep track of
          <br /> them in the one place.
        </h2>
      </div>
      <div className="property">
        <div className="propImg">
          <img src="" alt="" />
        </div>
        <h3>Recurring buys</h3>
        <h2>
          Invest in cryptocurrency slowly over time by scheduling
          <br /> buys daily, weekly, or monthly.
        </h2>
      </div>
      <div className="property">
        <div className="propImg">
          <img src="" alt="" />
        </div>
        <h3>Vault protection</h3>
        <h2>
          For added security, store your funds in a vault with time
          <br /> delayed withdrawals.
        </h2>
      </div>
      <div className="property">
        <div className="propImg">
          <img src="" alt="" />
        </div>
        <h3>Mobile apps</h3>
        <h2>Stay on top of the markets with the Coinbase app for</h2>
      </div>
    </div>
  );
}
