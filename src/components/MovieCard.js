import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="bg-gray-800 p-4 rounded-lg">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="w-full h-64 object-cover rounded-lg" />
        <h3 className="text-xl mt-2">{movie.title}</h3>
        <p className="text-gray-400">Rating: {movie.vote_average}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
