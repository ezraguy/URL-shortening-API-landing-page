import React from 'react';
import './App.css';
import Main from './components/main-section';
import Navbar from './components/navbar';
import UrlSection from './components/url-section';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <UrlSection />

    </div>
  );
}

export default App;
