/*import { render } from '@testing-library/react';

import React from 'react';

import { MoviesContext } from '../../contexts/MoviesContext';

import MoviesSearch from '.';

jest.mock('../../contexts/MoviesContext', () => {
    return {
        useContext: jest.fn(),
        handleMovieOrSerie: jest.fn(),
        
    }
})

    describe('test page Movies Search', () => {
        it('should be able new movies to search', () => {
            //  const addItem = jest.fn()
            const { debug } = render(
                <MoviesContext.Provider value={null}>
                    <MoviesSearch />
                </MoviesContext.Provider>
            )

            debug();
        })
    })*/