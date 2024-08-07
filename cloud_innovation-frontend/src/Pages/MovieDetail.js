import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import "./MovieDetail.css"

const MovieDetail = () => {
    const BASE_URL = `https://cloud-innovation-be-ojoi.onrender.com`;

  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const { isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`${BASE_URL}/movies/${id}`)
      .then(response => setMovie(response.data))
      .catch(error => console.error('Error fetching movie:', error));
  }, [id]);

  if (!isAuth) {
    navigate('/')
  }

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail">
      <h3 className="movie-id">{movie.id}</h3>
      <img src={movie.Poster} alt={movie.Title} className="movie-image" />
      <h2 className="movie-name">{movie.Title}</h2>
      <p className="movie-year">{movie.Year}</p>
      <p className="movie-type">{movie.Type}</p>
      <p className="movie-rating">{movie.rating}</p>
    </div>
  );
};

export default MovieDetail;
