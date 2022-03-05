import React from 'react';

import Header from './Components/Header/Header';
import Category from './Components/Category/Category';
import YoutubeEmbed from './Components/YoutubeEmbed/YoutubeEmbed';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <YoutubeEmbed videoId="uzSme3PRhZ0"/>
      <Category/>
    </div>
  );
}

export default App;
