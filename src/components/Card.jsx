import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Card = ({ movie }) => {
    const navigate = useNavigate();
    const { isLoggedIn, addToWatchlist, removeFromWatchlist, watchlist } = useAuth();
    const isInWatchlist = watchlist.find(m => m.imdbID === movie.imdbID);

    const handleMovieClick = (id) => {
        navigate(`/movie/${id}`);
    };

    const handleAddToWatchlist = (movie) => {
        if (isLoggedIn) {
            if (watchlist.find(m => m.imdbID === movie.imdbID)) {
                removeFromWatchlist(movie.imdbID);
            } else {
                addToWatchlist(movie);
            }
        } else {
            alert("You need to log in to add movies to your watchlist.");
        }
    };

    return (
        <div
            key={movie.imdbID}
            className="w-[230px] h-[400px] border p-4 rounded-md cursor-pointer bg-white shadow-md transition-transform duration-300 flex flex-col hover:shadow-xl"
        >
            {/* Image Section */}
            <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-64 object-cover mb-2 rounded-md cursor-pointer flex-grow "
                onClick={() => handleMovieClick(movie.imdbID)}
            />

            {/* Title Section */}
            <h3 className="text-lg font-semibold mb-2 line-clamp-2">{movie.Title}</h3>

            {/* Button Section */}
            <button
                onClick={() => handleAddToWatchlist(movie)}
                className={`mt-auto py-2 px-4 rounded shadow transition ${isInWatchlist ? 'bg-red-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
            >
                {isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
            </button>
        </div>
    )
}
