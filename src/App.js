import React, { useState } from 'react';
import './css/main.css';
import Header from './sections/Header';
import SubHeader from './sections/Subheader';
import Services from './sections/Services';

function App() {
  const breakpoints = {
    md: 800,
  };

  return (
    <div className="App">
      <Header breakpoints={breakpoints} />
      <SubHeader />
      <Services />
    </div>
  );
}

export default App;
