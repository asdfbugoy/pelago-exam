import React from 'react';

export default ({ isLoading, handleInputChange, handleSubmit, inputs }) => {
    const mType = ['movie', 'series', 'episode'];
    
    return <form className="row" onSubmit={handleSubmit}>
        <div className="col-sm mb-0-sm mb-3"><input onChange={handleInputChange} name="y" value={inputs.y} className="form-control" type="text" placeholder="Year" /></div>
        <div className="col-sm  mb-0-sm mb-3"><select className="form-control" onChange={handleInputChange} name="type" value={inputs.type}>
            <option value="">Type</option>
            {mType.map((d, i) => <option key={i} value={d}>{d}</option>)}
        </select></div>
        <div className="col-sm  mb-0-sm mb-3"><input onChange={handleInputChange} value={inputs.page} className="form-control" name="page" type="text" placeholder="Page" /></div>
        <div className="col-sm"><button disabled={isLoading} type="submit" className="btn btn-secondary w-100"><i className={isLoading ? 'fa fa-spin fa-spinner' : 'fa fa-search'}></i> Search</button></div>
    </form>
}