import React, { useState, useEffect, useRef } from 'react';
import './css/header.css';
import breakpoints from '../../config/breakpoints.json';
import logo from './images/digital-spaniel-logo-01.png';
import hamburger from './images/hamburger.svg';
import Nav from './Nav';

export default function Header() {
  const [scroll, setScroll] = useState({
    prevPosition: window.pageYOffset,
    isVisible: true,
    isScrolled: false,
  });
  const [sliderIsActive, setSliderIsActive] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth > breakpoints.md
  );

  // Adding event listener on component mount
  useEffect(() => {
    const handleScroll = () => {
      setScroll((scroll) => {
        const { prevPosition } = scroll;
        const currentPosition = window.pageYOffset;

        const isVisible = prevPosition > currentPosition;
        const isScrolled = currentPosition !== 0;

        return {
          prevPosition: currentPosition,
          isVisible,
          isScrolled,
        };
      });
    };

    // Responsively dealing with screen resizing
    const updateWindowDimensions = () => {
      setIsDesktop((state) => window.innerWidth > breakpoints.md);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateWindowDimensions);

    // Removing on unmount, for future proofing in case more pages are added
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sliderRef = useRef(null);

  const toggleSlider = (newState) => {
    console.log('toggle');
    // Focussing slider on open for onBlur
    if (!sliderIsActive) sliderRef.current.focus();
    setSliderIsActive(newState);
  };

  const dynamicHeaderStyles = {
    top: scroll.isVisible ? '0px' : '-120px',
    background: scroll.isScrolled ? '#eee' : 'none',
    boxShadow: scroll.isScrolled ? '0px 1px 6px 0px black' : 'none',
  };

  return (
    <>
      <header style={dynamicHeaderStyles}>
        <img id="logo" src={logo} alt="Digital Spaniel Logo" />
        {isDesktop ? (
          <Nav isScrolled={scroll.isScrolled} />
        ) : (
          <img
            id="hamburger"
            src={hamburger}
            alt="Menu icon"
            onClick={(e) => toggleSlider(true)}
          />
        )}
      </header>
      {!isDesktop && (
        <div
          id="slider"
          ref={sliderRef}
          tabIndex="1"
          style={{ right: sliderIsActive ? '0px' : '-330px' }}
          onClick={(e) => toggleSlider(false)}
          onBlur={(e) => toggleSlider(false)}
        >
          <Nav />
        </div>
      )}
    </>
  );
}
