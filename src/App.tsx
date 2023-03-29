import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import Home from './components/Home';
import Podcasts from './components/Podcasts';
import MovieCollection from './components/MovieCollection';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';

// import 'bootstrap/dist/css/boostrap.min.css';

// function MyButton() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <button className="btn btn-success" onClick={() => setCount(count + 1)}>
//         Increment
//       </button>
//       <p>{count}</p>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/movie-collection" element={<MovieCollection />} />
      </Routes>
    </div>
  );
}

export default App;
