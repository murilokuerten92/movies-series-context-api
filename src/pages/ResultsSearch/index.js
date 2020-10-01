import React, { useState } from 'react';

import api from '../../services/api';

import './styles.css'

import ResultList from '../ResultsList';
import ResultDetails from '../ResultsDetails';
import Pagination from '../../components/Pagination';

const URL = `https://www.omdbapi.com/?apikey=7c7ae5a`

const VIEWCONTAINER = 'VIEWCONTAINER'
const VIEWCONTAINERNEXT = 'VIEWCONTAINERNEXT'

export default function ResultsSearch() {

    const [search, setSearch] = useState({ query: '', type: '' });
    const [datas, setDatas] = useState([]);
    const [page, setPage] = useState(1)

    const [datasDetails, setDatasDetails] = useState([])

    const [showView, setShowView] = useState(VIEWCONTAINER)

    const [loading, setLoading] = useState(false)

    async function handleMovieOrSerie(page) {

        setLoading(true)
        setShowView(VIEWCONTAINER)

        const { data } = await api.get(`${URL}&s=${search.query.replace(/  +/g, ' ').trim().split(' ').join('+')}&type=${search.type}&page=${page}`)
        console.log(data)

        setLoading(false)
        setDatas(data)

    }

    const changePage = page => {
        setPage(page)
        handleMovieOrSerie(page)
    }

    async function getMovieOrSerie(id) {
        setLoading(true)
        setShowView(VIEWCONTAINERNEXT)

        const { data } = await api.get(`${URL}&i=${id}`)

        setLoading(false)
        setDatasDetails(data)
    }

    return (
        <>
            <div className='page-wrapper'>
                <div className="form-wrapper">
                    <form className="form"
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
                            placeholder="Search here..."
                            data-filled={search.query !== ''}
                        />

                        <button type="submit" className="form__submit" disabled={!search.query || !search.type}>
                            Search
                        </button>

                    </form>
                </div>

                <ResultList showView={showView} results={VIEWCONTAINER} loading={loading} datas={datas} page={page} getMovieOrSerie={id => getMovieOrSerie(id)} />

                <Pagination page={page} results={VIEWCONTAINER} datas={datas} showView={showView} changePage={changePage} />

                <ResultDetails showView={showView} results={VIEWCONTAINERNEXT} loading={loading} datasDetails={datasDetails} onClick={() => setShowView(VIEWCONTAINER)} />

            </div>
        </>
    )
}