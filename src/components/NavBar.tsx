import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-4 justify-content-between">
        <Link to="/" className="navbar-brand">
          MOVIES
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/podcasts" className="nav-link">
                Podcasts
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/movie-collection" className="nav-link">
                Movie Collection
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
