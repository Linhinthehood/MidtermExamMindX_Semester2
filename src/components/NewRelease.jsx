import React from 'react';
import { data } from '../MovieData.js'; gi
import './NewRelease.css'; 

function NewRelease({ setSelectedMovie }) {
  return (
    <div className="new-release">
      <h1>New Release</h1>
      <div className="new-release-list">
        {data.map((movie) => (
          <div
            key={movie.id}
            className="new-release-item"
            onClick={() => setSelectedMovie(movie)} 
          >
            <div className="movie-image">
              <img src={movie.image} alt={movie.movieName} />
            </div>
            <div className="movie-info">
              <p>Episode {movie.episode}</p>
              <h3>{movie.movieName}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewRelease;