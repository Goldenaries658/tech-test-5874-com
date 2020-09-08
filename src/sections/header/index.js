import React, { useState, useEffect } from 'react';
import './css/header.css';
import logo from './images/digital-spaniel-logo-01.png';
import hamburger from './images/hamburger.svg';
import Nav from './Nav';
import NavMob from './Hamburger';

export default function Header({ breakpoints }) {
  const [scroll, setScroll] = useState({
    prevPosition: window.pageYOffset,
    isVisible: true,
  });

  // Adding event listener on component mount
  useEffect(() => {
    const handleScroll = () => {
      setScroll((scroll) => {
        const { prevPosition } = scroll;
        const currentPosition = window.pageYOffset;

        const isVisible = prevPosition > currentPosition;

        return {
          prevPosition: currentPosition,
          isVisible,
        };
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Removing on unmount, for future proofing in case more pages are added
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isDesktop = window.innerWidth > breakpoints.md;

  return (
    <React.Fragment>
      <header style={scroll.isVisible ? { top: '0px' } : { top: '-120px' }}>
        <img id="logo" src={logo} alt="Digital Spaniel Logo" />
        {isDesktop ? (
          <Nav />
        ) : (
          <img id="hamburger" src={hamburger} alt="Menu icon" />
        )}
      </header>
      {!isDesktop && (
        <div id="slider">
          <Nav />
        </div>
      )}
    </React.Fragment>
  );
}
