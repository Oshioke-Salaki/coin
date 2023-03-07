import React from 'react';
import './Trusted.css';

export default function Trusted() {
  return (
    <div className="trusted">
      <h1>
        The most trusted
        <br /> cryptocurrency
        <br /> platform
      </h1>
      <h2>Here are a few reasons why you should choose Coinbase</h2>
      <div className="secure">
        <h3>Secure Storage</h3>
        <h4>
          We store the vast majority of the digital
          <br /> assets in secure offline storage.
        </h4>
        <a href="#">
          Learn how Coinbase keeps your funds safe and
          <br /> secure{'>'}
        </a>
        <div className="cryptStats">
          <div className="cryptStat">
            <h5>$145B</h5>
            <h6>Quarterly volume traded</h6>
          </div>
          <div className="cryptStat">
            <h5>100+</h5>
            <h6>Countries supported</h6>
          </div>
          <div className="cryptStat">
            <h5>110M+</h5>
            <h6>Verified users</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
