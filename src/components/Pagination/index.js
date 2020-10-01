import React from 'react'

import './styles.css'

export default function Pagination({ page, results, datas, loading, showView, changePage }) {

    return (
        <>
            {/* paginação dos resultados */}
            {showView === results && !loading && datas && datas.totalResults && datas.totalResults > 10 &&
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