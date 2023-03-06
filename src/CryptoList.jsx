import React from 'react';
import btc from './assets/btc.png';
import ada from './assets/ada.png';
import eth from './assets/eth.png';
import sol from './assets/sol.png';
import './CryptoList.css';

export default function CryptoList() {
  return (
    <div>
      <div className="crypto">
        <div className="cryptoLeft">
          <img src={btc} alt="" />
          <div className="cryptoName">
            <h2>Bitcoin</h2>
            <h2>BTC</h2>
          </div>
        </div>
        <div className="cryptoRight">
          <h2>NGN 10,291,923.92</h2>
          <h2>-0.10%</h2>
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
          <h2>NGN 783,923.92</h2>
          <h2>-0.40%</h2>
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
          <h2>NGN 146</h2>
          <h2>-2.80%</h2>
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
          <h2>NGN 142.569</h2>
          <h2>-0.20%</h2>
        </div>
      </div>
    </div>
  );
}
