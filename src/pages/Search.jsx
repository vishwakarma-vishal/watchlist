import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Card } from '../components/Card';

export const Search = () => {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get('q');
    if (searchQuery) {
      setQuery(searchQuery);
      fetchMovies(searchQuery);
    }
  }, [location.search]);

  const fetchMovies = async (query) => {
    const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=1b744d83`);
    const data = await response.json();
    setMovies(data.Search || []);
  };

  return (
    <div>
      <h2 className="text-2xl text-gray-800 font-semibold my-4">
        Search Results for: {query}
      </h2>
      <div className='flex flex-wrap justify-center gap-4 mt-6 '>
        {movies.map((movie) => {
          return <Card key={movie.imdbID} movie={movie} />
        })}
      </div>
    </div>
  );
};
