import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import Home from './components/Home';
import Podcasts from './components/Podcasts';
import MovieCollection from './components/MovieCollection';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        {/* Routing for various pages */}
        <Route path="/" element={<Home />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/movie-collection" element={<MovieCollection />} />
      </Routes>
    </div>
  );
}

export default App;
