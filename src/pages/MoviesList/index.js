import React, { useContext} from 'react'

import './styles.css';

import { MoviesContext } from '../../contexts/MoviesContext';

import MoviesDetails from '../MoviesDetails';

const MoviesList = () =>  {

    const { VIEWCONTAINER, showView, loading, datas, getMovieOrSerie, VIEWCONTAINERNEXT, datasDetails, setShowView } = useContext(MoviesContext)

    return (
        <>
            <div className="results-wrapper">
                {showView === VIEWCONTAINER &&
                    <div className="headline">
                        Search results {!loading && datas && datas.totalResults && `(${datas.totalResults} resultados)`}
                    </div>}

                {!loading && !datas &&
                    <div className="text">
                        Use the form on the side to search for a movie or series.</div>}

                {!loading && datas && datas.Error &&
                    <div className="text">Never result localized.</div>}

                {loading &&
                    <div className="text">Loading ...</div>}


                {showView === VIEWCONTAINER && !loading && datas && datas.Search && datas.Search.map(movie => (
                    <div className="result-wrapper" key={movie.imdbID}>
                        <div className="result-wrapper__title">{movie.Title}</div>
                        <div className="result-wrapper__info">Ano: {movie.Year}</div>

                        <button type="button" className="button-outline" onClick={() => getMovieOrSerie(movie.imdbID)}>view details</button>
                    </div>
                ))}

             <MoviesDetails showView={showView} results={VIEWCONTAINERNEXT} loading={loading} datasDetails={datasDetails} onClick={() => setShowView(VIEWCONTAINER)} />


            </div>
        </>
    )
}

export default MoviesList;