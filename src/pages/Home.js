import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US&page=${page}`)
      .then(response => {
        setMovies(response.data.results);
      });
  }, [page]);

  const nextPage = () => setPage(prev => prev + 1);
  const prevPage = () => setPage(prev => Math.max(prev - 1, 1));

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Popular Movies</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="flex justify-between mt-8">
        <button 
          onClick={prevPage} 
          disabled={page === 1} 
          className="bg-gray-700 text-white p-2 rounded hover:bg-gray-600 disabled:opacity-50"
        >
          Previous
        </button>
        <button 
          onClick={nextPage} 
          className="bg-gray-700 text-white p-2 rounded hover:bg-gray-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
