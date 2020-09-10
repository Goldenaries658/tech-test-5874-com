import React from 'react';
import './css/main.css';
import Header from './sections/Header';
import SubHeader from './sections/Subheader';
import Services from './sections/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <Services />
    </div>
  );
}

export default App;
