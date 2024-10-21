import React from 'react';
import './Explore.css'; 

function Explore({ selectedMovie }) {
  return (
    <div className="explore">
      <h1>Explore</h1>
      <p>What are you gonna watch today?</p>
      <div className="explore-banner">
        {selectedMovie ? (
          <div className="banner-content">
            <img
              src={selectedMovie.banner}
              alt={selectedMovie.movieName}
              className="banner-image"
            />
            <div className="overlay">
              <h2>{selectedMovie.movieName}</h2>
              <p>{selectedMovie.description}</p>
            </div>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default Explore;