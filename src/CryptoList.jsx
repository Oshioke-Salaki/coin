import React from 'react';
import btc from './assets/btc.png';
import ada from './assets/ada.png';
import eth from './assets/eth.png';
import sol from './assets/sol.png';
import ae from './assets/ae.jpg';
import './CryptoList.css';

export default function CryptoList() {
  return (
    <div className="cryptoList">
      <div className="crypto">
        <div className="cryptoLeft">
          <img src={btc} alt="" />
          <div className="cryptoName">
            <h2>Bitcoin</h2>
            <h2>BTC</h2>
          </div>
        </div>
        <div className="cryptoRight">
          <h2>$22,730</h2>
          <h2>-0.14%</h2>
        </div>
      </div>
      <div className="crypto">
        <div className="cryptoLeft">
          <img src={eth} alt="" />
          <div className="cryptoName">
            <h2>Ethereum</h2>
            <h2>ETH</h2>
          </div>
        </div>
        <div className="cryptoRight">
          <h2>$1,564.44</h2>
          <h2>-0.64%</h2>
        </div>
      </div>
      <div className="crypto">
        <div className="cryptoLeft">
          <img src={ada} alt="" />
          <div className="cryptoName">
            <h2>Cardano</h2>
            <h2>ADA</h2>
          </div>
        </div>
        <div className="cryptoRight">
          <h2>$0.3316</h2>
          <h2>-1.92%</h2>
        </div>
      </div>
      <div className="crypto">
        <div className="cryptoLeft">
          <img src={sol} alt="" />
          <div className="cryptoName">
            <h2>Solana</h2>
            <h2>SOL</h2>
          </div>
        </div>
        <div className="cryptoRight">
          <h2>$20.7</h2>
          <h2>-2.31%</h2>
        </div>
      </div>
      <div className="crypto">
        <div className="cryptoLeft">
          <img src={ae} alt="" />
          <div className="cryptoName">
            <h2>AE Cash</h2>
            <h2>AE</h2>
          </div>
        </div>
        <div className="cryptoRight">
          <h2>$9.78</h2>
          <h2>+0.10%</h2>
        </div>
      </div>
    </div>
  );
}
