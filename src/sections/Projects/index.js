import React from 'react';
import './css/projects.css';

export default function Projects() {
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
    </section>
  );
}
