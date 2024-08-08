import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import { fetchMovies, nextPage, prevPage } from '../features/movies/moviesSlice';

const TopRated = () => {
  const dispatch = useDispatch();
  const { movies, page, status, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies({ type: 'top_rated', page }));
  }, [page, dispatch]);

  const handleNextPage = () => {
    dispatch(nextPage());
  };

  const handlePrevPage = () => {
    dispatch(prevPage());
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Top Rated Movies</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>{error}</p>}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="flex justify-between mt-8">
        <button 
          onClick={handlePrevPage} 
          disabled={page === 1} 
          className="bg-gray-700 text-white p-2 rounded hover:bg-gray-600 disabled:opacity-50"
        >
          Previous
        </button>
        <button 
          onClick={handleNextPage} 
          className="bg-gray-700 text-white p-2 rounded hover:bg-gray-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TopRated;
