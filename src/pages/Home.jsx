import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { Card } from '../components/Card';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [genre, setGenre] = useState('Action');
  const [loading, setLoading] = useState(false);

  const getMoviesByGenre = async (genre = 'Action') => {
    setLoading(true);

    const apiKey = import.meta.env.VITE_APP_API_KEY;

    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${genre}`);

      if (response.ok) {
        const data = await response.json();
        if (data.Search) {
          setMovies(data.Search);
          console.log("Movie data ->", data.Search);
        } else {
          setMovies([]);
          console.error("No movies found");
        }
      } else {
        console.error("Failed to fetch movie data");
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMoviesByGenre(genre);
  }, [genre]);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      getMoviesByGenre(searchTerm);
      setGenre(searchTerm);
    }
  };

  return (
    <div className='flex flex-col w-full '>
      {/* home message */}
      <div className='border border-red-500 bg-white px-2 py-6 rounded-md shadow-md'>
        <h1 className='text-3xl font-semibold mb-4'>
          Welcome to
          <span className='text-red-500'>Watchlists</span>
        </h1>
        <p>Browse movies, add them to your watchlists, and share them with friends.</p>
        <p>Just click on the button <span className='text-green-500 font-bold'>Add to Watchlist</span> to add a movie, and click on the poster to see more details.</p>
      </div>

      {/* search box */}
      <div className='flex border border-gray-700 rounded-md justify-between items-center bg-white mt-6'>
        <div className='w-10 flex justify-center'>
          <CiSearch className='text-2xl text-gray-500 cursor-pointer font-bold' />
        </div>
        <input
          type='text'
          placeholder='Search'
          className='w-full outline-none p-2'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className='bg-red-500 text-white py-2 px-6 rounded-md border border-red-500'
        >
          Search
        </button>
      </div>

      {/* search message */}
      <div className='mt-2 text-md font-semibold'>
        Showing {genre} Movies
      </div>

      {loading && <div className="text-center mt-4">Loading...</div>}

      {/* movie cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 mx-auto'>
        {movies.map((movie) => {
          return <Card key={movie.imdbID} movie={movie} />
        })}
      </div>
    </div>
  );
};