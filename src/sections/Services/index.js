import React from 'react';
import './css/services.css';
import arrowIcon from './images/arrow-icon.svg';

export default function Services() {
  return (
    <section className="services">
      <article className="info-text">
        <h1>
          What are
          <br />
          <span>we capable of</span>
        </h1>

        <p>
          By focusing on design as an enabler and putting a huge emphasis on our
          clients as co-producers, we create innovative, sustainable marketing
          that enhances brand experience and user engagement.
        </p>

        <footer className="cta-link">
          <a href="#">Our process</a>
        </footer>
      </article>

      <article className="links">
        <figure>
          <figcaption>BRAND</figcaption>
          <ul>
            <li>
              <a href="#">
                Brand Strategy
                <img src={arrowIcon} alt="Arrow Icon" />
              </a>
            </li>
            <li>
              <a href="#">
                Logo & Name
                <img src={arrowIcon} alt="Arrow Icon" />
              </a>
            </li>
            <li>
              <a href="#">
                Identity & Collateral
                <img src={arrowIcon} alt="Arrow Icon" />
              </a>
            </li>
          </ul>
        </figure>

        <figure>
          <figcaption>MARKETING</figcaption>
          <ul>
            <li>
              <a href="#">
                Digital
                <img src={arrowIcon} alt="Arrow Icon" />
              </a>
            </li>
            <li>
              <a href="#">
                Market Research
                <img src={arrowIcon} alt="Arrow Icon" />
              </a>
            </li>
          </ul>
        </figure>

        <figure>
          <figcaption>DEVELOPMENT</figcaption>
          <ul>
            <li>
              <a href="#">
                eCommerce
                <img src={arrowIcon} alt="Arrow Icon" />
              </a>
            </li>
            <li>
              <a href="#">
                Web Development
                <img src={arrowIcon} alt="Arrow Icon" />
              </a>
            </li>
            <li>
              <a href="#">
                Mobile Apps
                <img src={arrowIcon} alt="Arrow Icon" />
              </a>
            </li>
          </ul>
        </figure>
      </article>
    </section>
  );
}
