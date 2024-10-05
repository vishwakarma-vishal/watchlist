import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export const Watchlist = () => {
  const { isLoggedIn, watchlist, removeFromWatchlist } = useAuth();

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h2 className="text-2xl font-bold mb-4">My Watchlist</h2>
          {watchlist.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-4 ">
              {watchlist.map((movie) => (
                <div
                  key={movie.imdbID}
                  className="w-[230px] h-[400px] border p-4 rounded-md bg-white shadow-md hover:shadow-xl flex flex-col"
                >
                  
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="w-full h-64 object-cover mb-2 rounded-md flex-grow"
                  />
                  <h3 className="text-lg font-semibold mb-2">{movie.Title}</h3>

                  <div className="flex justify-start items-center gap-2">
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-400"
                      onClick={() => removeFromWatchlist(movie.imdbID)}
                    >
                      Remove
                    </button>
                    <Link to={`/movie/${movie.imdbID}`}>
                      <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-400">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Your watchlist is empty. Add movies to your watchlist!</p>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full min-h-[90vh]">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Please Log In</h2>
          <p className="mb-4 text-center">Login or create an account to add movies to your watchlist.</p>
          <div className='flex items-center flex-wrap justify-center gap-2 sm:gap-4 text-md'>
            <Link to="/login">
              <button className="bg-red-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-md hover:bg-red-600">
                Go to Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-green-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-md hover:bg-green-600">
                Create Account
              </button>
            </Link>
            <Link to="/" >
              <button className="bg-blue-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-md hover:bg-blue-600">
                Go to Home
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
