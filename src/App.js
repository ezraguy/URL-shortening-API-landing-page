import React from 'react';
import './App.css';
import BoostLinks from './components/boost-links';
import Footer from './components/footer';
import Main from './components/main-section';
import Navbar from './components/navbar';
import UrlSection from './components/url-section';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <UrlSection />
      <BoostLinks />
      <Footer />
    </div>
  );
}

export default App;
