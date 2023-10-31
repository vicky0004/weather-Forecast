import React, { Component } from 'react'
import Header from './Header';
import Home from "./Home";
import Weather from "./Weather";

import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div >
          <Router>
            <div className="container-fluid p-0">
              <Header />
              <Routes>
                <Route path="/weather" element={<Weather />}></Route>
                <Route path="/" element={<Home />}></Route>
                <Route path="*" element={<Home />}></Route>
              </Routes>
            </div>
          </Router>
        </div>
    )
  }
}

export default App;
