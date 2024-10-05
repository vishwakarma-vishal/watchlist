import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Movie = () => {
  const { movieId } = useParams();
  const { isLoggedIn, addToWatchlist, removeFromWatchlist, watchlist } = useAuth();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const fetchMovie = async () => {
    try {
      const apiKey = '1b744d83'; // Replace with your OMDB API key
      console.log("Fetching movie with ID:", movieId); // Log the movie ID
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      if (data.Response === "True") {
        setMovie(data);
      } else {
        setError(data.Error); // Handle the error if movie not found
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
      setError("Failed to fetch movie details");
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [movieId]);

  const handleAddToWatchlist = () => {
    if (isLoggedIn) {
      if (watchlist.find(m => m.imdbID === movie.imdbID)) {
        removeFromWatchlist(movie.imdbID); // Remove if already in watchlist
      } else {
        addToWatchlist(movie); // Add if not in watchlist
      }
    } else {
      alert("You need to log in to add movies to your watchlist.");
    }
  };

  if (error) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <div className='text-red-600 font-bold text-center'>{error}</div>
      </div>
    ); // Display error message if any
  }

  if (!movie) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <div className='text-center'>Loading...</div>
      </div>
    );
  }

  const isInWatchlist = watchlist.find(m => m.imdbID === movie.imdbID);

  return (
    <div className='flex flex-col items-center justify-center p-2 sm:p-4 rounded-lg'>
      {/* Title Section */}
      <h2 className='text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 text-center w-full'>
        {movie.Title} ({movie.Year})
      </h2>

      {/* Info Section */}
      <div className='flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg p-2 sm:p-4 shadow-lg border border-gray-300 mt-6'>
        <img
          src={movie.Poster}
          alt={movie.Title}
          className='w-full md:w-1/3 max-h-80 object-cover rounded-md mb-4 md:mb-0 md:mr-4' 
        />
        
        <div className='flex flex-col justify-between w-full md:w-2/3 p-4'>
          <h3 className='font-semibold text-md xl:text-lg text-gray-800'>Director:</h3>
          <p className='text-gray-600'>{movie.Director}</p>

          <h3 className='font-semibold text-md xl:text-lg  text-gray-800'>Actors:</h3>
          <p className='text-gray-600'>{movie.Actors}</p>

          <h3 className='font-semibold text-md xl:text-lg  text-gray-800'>Genre:</h3>
          <p className='text-gray-600'>{movie.Genre}</p>

          <h3 className='font-semibold text-md xl:text-lg  text-gray-800'>
            Release Date: <span className='text-sm font-normal text-gray-600'>{movie.Released}</span>
          </h3>

          <h3 className='font-semibold text-md xl:text-lg text-gray-800'>
            Rating: <span className='  text-green-600'>{movie.imdbRating}</span>
          </h3>

          {/* Add to Watchlist Button */}
          <button
            onClick={handleAddToWatchlist}
            className={`mt-4 py-2 px-4 rounded shadow transition ${isInWatchlist ? 'bg-red-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
          >
            {isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
          </button>
        </div>
      </div>

      {/* Description Section */}
      <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl border border-gray-300 mt-4'>
        <h3 className='font-semibold text-lg text-gray-800'>Description:</h3>
        <p className='text-gray-700'>{movie.Plot}</p>
      </div>
    </div>
  );
};