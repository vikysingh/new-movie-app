import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Slideshow from "./components/Slideshow/Slideshow"
// import Test from "./components/Navbar/Test"

import "./index.css"
import Main from './components/Main/Main';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
        <div className="App">
            <Navbar />
            <Slideshow />
            <Main />
          </div>
        </Route>
        <Route path="/:route-movie-id">
          helllo
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
