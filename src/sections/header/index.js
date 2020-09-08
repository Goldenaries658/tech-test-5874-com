import React, { useState, useEffect } from 'react';
import './css/main.css';
import logo from './images/digital-spaniel-logo-01.png';
import Nav from './Nav';

export default function Header() {
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

  return (
    <header style={scroll.isVisible ? { top: '0px' } : { top: '-120px' }}>
      <img src={logo} alt="Digital Spaniel Logo" />
      <Nav />
    </header>
  );
}
