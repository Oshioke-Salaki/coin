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
      <img src={ill1} alt="" />
    </div>
  );
}
