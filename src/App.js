import React from 'react';

import './global.css';

import MoviesSearch from './pages/MoviesSearch';
import Pagination from './components/Pagination';
import MoviesList from './pages/MoviesList';
import MoviesDetails from './pages/MoviesDetails';

import MoviesContextProvider from './contexts/MoviesContext';

function App() {
  return (
    <MoviesContextProvider>
      <div className='app-wrapper'>
        <MoviesSearch />
        <MoviesList />
        <MoviesDetails />
        <Pagination />
      </div>
    </MoviesContextProvider>
  );
}

export default App;
