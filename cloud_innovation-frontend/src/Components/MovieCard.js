import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import "../Components/moviecard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={movie.Poster} alt={movie.Title} className="movie-image" />
      </Link>
      <h2 className="movie-name">{movie.Title}</h2>
      <p className="movie-year">{movie.Year}</p>
      <p className="movie-type">{movie.Type}</p>
      <p className="movie-rating">{movie.rating}</p>
    </div>
  );
};

export default MovieCard;
