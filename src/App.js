import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Slideshow from "./components/Slideshow/Slideshow"
// import Test from "./components/Navbar/Test"

import "./index.css"
import Main from './components/Main/Main';
import StoreContextProvider from "./context"
import MoviePage from './components/MoviePage/MoviePage';
import Search from './components/Search/Search';

function App() {
  return (
    <StoreContextProvider>
      <BrowserRouter>
        <Switch>

          <Route path="/" exact>
            <div className="App">
              <Navbar />
              <Slideshow />
              <Main />
            </div>
          </Route>

          <Route path="/movie/:id">
            <MoviePage />
          </Route>

          <Route exact path="/search">
            <Navbar />
            <Search />
          </Route>

        </Switch>
      </BrowserRouter>
    </StoreContextProvider>
  );
}

export default App;
