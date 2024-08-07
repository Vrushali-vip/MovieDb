import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY&language=en-US`)
      .then(response => {
        setMovie(response.data);
      });

    axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=YOUR_API_KEY&language=en-US`)
      .then(response => {
        setCast(response.data.cast);
      });
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{movie.title}</h1>
      <div className="flex flex-col md:flex-row">
        <img 
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
          alt={movie.title} 
          className="w-full md:w-1/3 mb-4 md:mb-0 rounded-lg"
        />
        <div className="md:ml-8 flex-1">
          <p className="mb-4 text-base md:text-lg">{movie.overview}</p>
          <p className="mb-2 text-base md:text-lg"><strong>Release Date:</strong> {movie.release_date}</p>
          <p className="mb-2 text-base md:text-lg"><strong>Rating:</strong> {movie.vote_average}</p>
          <p className="mb-2 text-base md:text-lg"><strong>Runtime:</strong> {movie.runtime} mins</p>
          <h2 className="text-2xl md:text-3xl font-semibold mt-4">Cast</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {cast.map(member => (
              <div key={member.cast_id} className="bg-gray-800 p-4 rounded-lg">
                <img 
                  src={`https://image.tmdb.org/t/p/w500/${member.profile_path}`} 
                  alt={member.name} 
                  className="w-full h-40 object-cover mb-2 rounded-lg"
                />
                <p className="text-base font-semibold">{member.name}</p>
                <p className="text-gray-400 text-sm">{member.character}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
