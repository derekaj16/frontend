import React from 'react';
import Title from '../Title';
import data from '../MovieData.json';

const movies = data.MovieData;

class MovieCollection extends React.Component {
  render() {
    return (
      <div className="container">
        <Title title="Movie Collection" />
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Category</th>
              <th scope="col">Title</th>
              <th scope="col">Year</th>
              <th scope="col">Director</th>
              <th scope="col">Rating</th>
              <th scope="col">Edited?</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((m) => (
              <tr>
                <td>{m.Category}</td>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MovieCollection;
