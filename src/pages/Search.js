import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Search = () => {
  const query = useQuery().get('query');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query) {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&language=en-US&query=${query}&page=1`)
        .then(response => {
          setMovies(response.data.results);
        });
    }
  }, [query]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl mb-4">Search Results</h1>
      <div className="grid grid-cols-4 gap-4">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Search;
