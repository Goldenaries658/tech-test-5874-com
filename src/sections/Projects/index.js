import React from 'react';
import './css/projects.css';
import wellies01 from './images/wellies01.png';
import mackerel from './images/mackerel.png';
import newspaper from './images/newspaper.png';
import newspaper02 from './images/newspaper02.png';
import rider01 from './images/rider01.png';
import angleLeftIcon from './images/angle-left.svg';
import angleRightIcon from './images/angle-right.svg';

export default function Projects() {
  const images = [
    {
      id: 0,
      src: wellies01,
      alt: 'A pair of stylised wellies',
      width: 1,
    },
    {
      id: 1,
      src: newspaper02,
      alt: 'Newspaper headline',
      width: 1,
    },
    {
      id: 2,
      src: mackerel,
      alt: 'Tesco finest Mackerel Fillets advertisement',
      width: 1,
    },
    {
      id: 3,
      src: newspaper,
      alt: 'Newspaper advertisement',
      width: 2,
    },
    {
      id: 4,
      src: rider01,
      alt: '3d cartoon rendering of boy on a bike',
      width: 1,
    },
  ];

  return (
    <section id="projects">
      <article className="info-text">
        <h1>
          Some of our <br />
          <span>recent projects</span>
        </h1>
      </article>

      <nav className="pagination-links">
        <ul>
          <li className="active">
            <a href="#">All</a>
          </li>
          <li>
            <a href="#">Branding</a>
          </li>
          <li>
            <a href="#">Web Design</a>
          </li>
          <li>
            <a href="#">Digital Marketing</a>
          </li>
        </ul>
      </nav>

      <div className="mosaic">
        {images.map(({ id, src, alt, width }) => (
          <img
            className={`mosaic-img width-${width}`}
            key={id}
            src={src}
            alt={alt}
          />
        ))}
      </div>

      <footer className="mosaic-footer">
        <div className="cta-link">
          <a href="#">See all work</a>
        </div>

        <div className="mosaic-pagination">
          <div className="left-arrow-icon">
            <img src={angleLeftIcon} alt="Left arrow icon" />
          </div>

          <div className="right-arrow-icon">
            <img src={angleRightIcon} alt="Right arrow icon" />
          </div>
        </div>
      </footer>
    </section>
  );
}
