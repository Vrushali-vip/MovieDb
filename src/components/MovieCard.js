import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="block">
      <div className="bg-gray-800 p-4 rounded-lg transition-transform transform hover:scale-105">
        <img 
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
          alt={movie.title} 
          className="w-full h-64 object-cover rounded-md"
        />
        <h3 className="text-lg md:text-xl mt-2 font-semibold text-white">{movie.title}</h3>
        <p className="text-gray-400 text-sm md:text-base">Rating: {movie.vote_average}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
