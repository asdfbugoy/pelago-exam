import React from 'react';

export default ({ pages, page, fetchMovies }) => {
    const onClick = page => () => fetchMovies(page);
    return <section className="table-responsive">
        <ul className="pagination">
            {Array.from({ length: pages }, (d, i) => <li key={i} className={`page-item ${page === i + 1 ? 'active' : ''}`}><span onClick={onClick(i + 1)} className="page-link">{i + 1}</span></li>)}
        </ul>
    </section>
}