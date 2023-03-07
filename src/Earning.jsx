import React from 'react';
import './Earning.css';

import near from './assets/near.png';
import shp from './assets/shp.png';
import amp from './assets/amp.png';
import graph from './assets/graph.png';

export default function Earning() {
  return (
    <div className="earning">
      <h1>
        Earn up to $25 <br /> worth of crypto
      </h1>
      <p>
        Discover how specific cryptocurrencies
        <br /> work — and get a bit of each crypto to try
        <br /> out for yourself.
      </p>
      <a href="#">Start Earning</a>
      <div className="earn">
        <div className="earnLeft">
          <img src={graph} alt="" />
          <h2>The Graph</h2>
        </div>
        <h3>Earn $4 GRT</h3>
      </div>
      <div className="earn">
        <div className="earnLeft">
          <img src={amp} alt="" />
          <h2>AMP</h2>
        </div>
        <h3>Earn $3 AMP</h3>
      </div>
      <div className="earn">
        <div className="earnLeft">
          <img src={shp} alt="" />
          <h2>SHPING</h2>
        </div>
        <h3>Earn $14 SHPING</h3>
      </div>
      <div className="earn">
        <div className="earnLeft">
          <img src={near} alt="" />
          <h2>NEAR Protocol</h2>
        </div>
        <h3>Earn $3 NEAR</h3>
      </div>
    </div>
  );
}
