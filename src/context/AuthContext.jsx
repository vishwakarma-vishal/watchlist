import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(null); // Track logged-in user email
  const [watchlist, setWatchlist] = useState([]);

  // Load watchlist from localStorage for the logged-in user
  useEffect(() => {
    if (userEmail) {
      const savedWatchlist = localStorage.getItem(`${userEmail}_watchlist`);
      setWatchlist(savedWatchlist ? JSON.parse(savedWatchlist) : []);
    }
  }, [userEmail]);

  const login = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email); // Save the logged-in user's email
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserEmail(null);
  };

  const addToWatchlist = (movie) => {
    setWatchlist((prev) => {
      const updatedWatchlist = [...prev, movie];
      if (userEmail) {
        localStorage.setItem(`${userEmail}_watchlist`, JSON.stringify(updatedWatchlist));
      }
      return updatedWatchlist;
    });
  };

  const removeFromWatchlist = (movieId) => {
    setWatchlist((prev) => {
      const updatedWatchlist = prev.filter(movie => movie.imdbID !== movieId);
      if (userEmail) {
        localStorage.setItem(`${userEmail}_watchlist`, JSON.stringify(updatedWatchlist));
      }
      return updatedWatchlist;
    });
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userEmail, login, logout, watchlist, addToWatchlist, removeFromWatchlist }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
