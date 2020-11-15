import React, { createContext, useState } from 'react';

import api from '../services/api';

import { ViewContainerMovies } from '../constants/ViewContainerMovies';

export const MoviesContext = createContext();

const URL = `https://www.omdbapi.com/?apikey=7c7ae5a`;

const MoviesContextProvider = ({ children }) => {   

    const [search, setSearch] = useState({ query: '', type: '' });
    const [datas, setDatas] = useState([]);
    const [page, setPage] = useState(1);

    const [datasDetails, setDatasDetails] = useState([]);

    const { VIEWCONTAINER, VIEWCONTAINERNEXT } = ViewContainerMovies;

    const [showView, setShowView] = useState(VIEWCONTAINER);

    const [loading, setLoading] = useState(false);

    async function handleMovieOrSerie(page) {

        setLoading(true)
        setShowView(VIEWCONTAINER)

        const { data } = await api.get(`${URL}&s=${search.query.replace(/  +/g, ' ').trim().split(' ').join('+')}&type=${search.type}&page=${page}`)

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
        <MoviesContext.Provider value={{
            handleMovieOrSerie,
            getMovieOrSerie,
            search,
            setSearch,
            setPage,
            changePage,
            showView,
            VIEWCONTAINER,
            loading,
            datas,
            page,
            VIEWCONTAINERNEXT,
            datasDetails,
            setShowView
        }}>
            { children}
        </MoviesContext.Provider>
    )

}

export default MoviesContextProvider;