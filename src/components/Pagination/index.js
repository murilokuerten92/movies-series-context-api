import React, { useContext } from 'react'

import './styles.css'

import { MoviesContext } from '../../contexts/MoviesContext';

const Pagination = () => {
      
    const { showView, page, datas, loading, changePage, VIEWCONTAINER } = useContext(MoviesContext);

    return (
        <>
            {/* paginação dos resultados */}
            {showView === VIEWCONTAINER && !loading && datas && datas.totalResults && datas.totalResults > 10 &&
                <div className="pagination">
                    {page > 1 &&
                        <button type="button" onClick={() => changePage(page - 1)}>{'<< '}<span>pág. anterior</span></button>}

                    <div className="pagination__actual">pág. {page} de {Math.ceil(datas.totalResults / 10)}</div>

                    {page < datas.totalResults / 10 &&
                        <button type="button" onClick={() => changePage(page + 1)}><span>próx. página</span>{' >>'}
                        </button>
                    }
                </div>
            }
        </>
    )
}

export default Pagination;