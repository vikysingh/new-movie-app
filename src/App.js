import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Slideshow from "./components/Slideshow/Slideshow"
import Test from "./components/Navbar/Test"

import "./index.css"
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slideshow />
      <Main />
      <Test />
    </div>
  );
}

export default App;
