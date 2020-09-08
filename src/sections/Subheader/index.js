import React from 'react';
import './css/subheader.css';
import headerImg from './images/Spaniel01_gradient@2x.png';

export default function SubHeader() {
  return (
    <section className="subheader">
      <article className="info-text">
        <em>BRAND, DEV, ECOM, MARKETING</em>

        <h1>
          We unleash
          <br />
          <span>business potential</span>
        </h1>

        <p>
          We create brand experiences which are memorable and distinct. Our
          experienced team create and develop brands with personality and
          resonance.
        </p>

        <footer className="cta-link">
          <a href="#">Let's talk</a>
        </footer>
      </article>

      <img src={headerImg} alt="A spaniel running on grass" />
    </section>
  );
}
