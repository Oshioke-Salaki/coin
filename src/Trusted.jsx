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
          <br /> secure{' >'}
        </a>
      </div>
      <div className="secure">
        <h3>Protected by Insurance</h3>
        <h4>
          Coinbase maintains crypto insurance and all USD cash balances are
          covered by FDIC insurance, up to a maximum of $250,000.
        </h4>
        <a href="#">
          Learn how your crypto is covered by our insurance policy{' >'}
        </a>
      </div>
      <div className="secure">
        <h3>Industry best practices</h3>
        <h4>
          Coinbase supports a variety of the most popular digital currencies.
        </h4>
        <a href="#">
          Learn how we implement industry best practices for account security
          {' >'}
        </a>
      </div>
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
  );
}
