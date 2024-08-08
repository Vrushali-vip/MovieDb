// src/pages/Search.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchMovies } from '../redux/searchSlice';
import MovieCard from '../components/MovieCard';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Search = () => {
  const query = useQuery().get('query');
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.search);

  useEffect(() => {
    if (query) {
      dispatch(fetchMovies(query));
    }
  }, [query, dispatch]);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Search Results</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Search;
