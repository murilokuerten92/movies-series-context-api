import React from 'react'

import './styles.css'

const MoviesDetails = ({ showView, results, datasDetails, loading, onClick }) => {

    return (
        <>

            {showView === results && !loading && datasDetails &&

                <>

                    <div className="wrapper">
                        <div className="headline">{datasDetails.Title}</div>
                        {datasDetails.Poster !== 'N/A' &&
                            <img className="wrapper__img" src={datasDetails.Poster} alt={datasDetails.Title} />}
                        <div className="wrapper__value"><strong>Year:</strong> {datasDetails.Year}</div>
                        <div className="wrapper__value"><strong>Genre(s):</strong> {datasDetails.Genre}</div>
                        <div className="wrapper__value"><strong>Director:</strong> {datasDetails.Director}</div>
                        <div className="wrapper__value"><strong>Actor:</strong> {datasDetails.Actors}</div>
                    </div>

                    <button type="button" className='button-details' onClick={onClick}>back</button>
                </>
            }

        </>
    )
}

export default MoviesDetails