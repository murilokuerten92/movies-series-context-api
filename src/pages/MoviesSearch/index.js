import React, { useContext } from 'react';

import { MoviesContext } from '../../contexts/MoviesContext';

import './styles.css';

const MoviesSearch = () =>  {

    const { handleMovieOrSerie, search, setPage, setSearch } = useContext(MoviesContext);

    return (
        <>
            <div className='page-wrapper'>
                <div className="form-wrapper">
                    <form className="form"
                        data-testid='form-search'
                        onSubmit={e => {
                            e.preventDefault()
                            setPage(1)
                            handleMovieOrSerie(1)
                        }}>

                        <div className="headline">Search</div>
                        <div className="text">What do you want to look for?</div>
                        <div className="form__options">
                            <button className="form__option" type="button" onClick={() => setSearch({ ...search, type: 'movie' })}
                                data-selected={search.type === 'movie'}>Movie
                            </button>

                            <button className="form__option" type="button" onClick={() => setSearch({ ...search, type: 'series' })}
                                data-selected={search.type === 'series'}>
                                Series
                            </button>
                        </div>

                        <input
                            onChange={e => setSearch({ ...search, query: e.target.value })}
                            type="text"
                            data-testid='input-search'
                            placeholder="Search here..."
                            data-filled={search.query !== ''}
                        />

                        <button data-testid='submit-search' type="submit" className="form__submit" disabled={!search.query || !search.type}>
                            Search
                        </button>

                    </form>
                </div>

            </div>
        </>
    )
}

export default MoviesSearch