import React from 'react';
import debounce from 'lodash.debounce';

export default ({ forwardedRef, isLoading, setIsAdvanced, fetchMovies, isAdvanced }) => {
    const onClickAdvanced = () => setIsAdvanced(!isAdvanced);
    const onChange = debounce(() => fetchMovies(), 1000);
    const onClickSearch = () => fetchMovies();

    return <div className="input-group mb-3">
        <input ref={forwardedRef} onChange={onChange} type="text" className="form-control" />
        <div className="input-group-append">
            <button disabled={isLoading} onClick={onClickSearch} className="btn btn-outline-secondary"><i className={isLoading ? 'fa fa-spin fa-spinner' : 'fa fa-search'}></i></button>
        </div>
        <div className="input-group-append">
            <button disabled={isLoading} onClick={onClickAdvanced} className="btn btn-outline-secondary"><i className="fa fa-search-plus"></i></button>
        </div>
    </div>
}