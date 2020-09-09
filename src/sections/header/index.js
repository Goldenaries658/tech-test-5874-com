import React, { useState, useEffect, useRef } from 'react';
import './css/header.css';
import logo from './images/digital-spaniel-logo-01.png';
import hamburger from './images/hamburger.svg';
import Nav from './Nav';

export default function Header({ breakpoints }) {
  const [scroll, setScroll] = useState({
    prevPosition: window.pageYOffset,
    isVisible: true,
  });

  const [sliderIsActive, setSliderIsActive] = useState(false);

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

  const sliderRef = useRef(null);

  const toggleSlider = (newState) => {
    console.log('toggle');
    // Focussing slider on open for onBlur
    if (!sliderIsActive) sliderRef.current.focus();
    setSliderIsActive(newState);
  };

  return (
    <React.Fragment>
      <header style={{ top: scroll.isVisible ? '0px' : '-120px' }}>
        <img id="logo" src={logo} alt="Digital Spaniel Logo" />
        {isDesktop ? (
          <Nav />
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
          style={{ right: sliderIsActive ? '0px' : '-170px' }}
          onClick={(e) => toggleSlider(false)}
          onBlur={(e) => toggleSlider(false)}
        >
          <Nav />
        </div>
      )}
    </React.Fragment>
  );
}
