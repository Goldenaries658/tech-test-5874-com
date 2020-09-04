import React from 'react';
import './css/main.css';
import logo from './images/digital-spaniel-logo-01.png';
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Digital Spaniel Logo" />
      <Nav />
    </header>
  );
}
