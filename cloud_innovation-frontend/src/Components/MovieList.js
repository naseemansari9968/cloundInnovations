// MovieList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../Redux/MovieReducer/action';
import MovieCard from './MovieCard';
import './MovieList.css';
import { useLocation } from 'react-router-dom';

const MovieList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { movies, isLoading, isError } = useSelector((state) => state.movies);

  useEffect(() => {
    const queryParams = Object.fromEntries(new URLSearchParams(location.search));
    dispatch(fetchMovies(queryParams));
  }, [dispatch, location.search]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading movies.</div>;

  return (
    <div data-testid="movie-list" className='container'>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
