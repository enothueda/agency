import React from 'react';

import './App.css';

import Header from './components/header/header.component';
import Slideshow from './components/slideshow/slideshow.component';

const App = () => 
  (
    <div className="App">
      <Header/>
      <Slideshow />
      <h1>Services (group)</h1>
      <h1>Packages detail</h1>
      <div>Footer</div>
    </div>
  );


export default App;
