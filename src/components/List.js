import React from 'react';

export default ({ movies }) => <section className="row">
    {movies ? movies.map((d, i) => <div key={i} className="col-sm-6">
        <div className="card shadow mb-3">
            <div className="row no-gutters">
                <div className="col-3">
                    {/* <img src={d.Poster} className="img-fluid" height="150" alt="" /> */}
                    <div className="poster" style={{ backgroundImage: `url(${d.Poster})` }}></div>
                </div>
                <div className="col-9">
                    <div className="card-body">
                        <h5 className="primary">{d.Title}</h5>
                        <div>{d.Type}</div>
                        <h5 className="secondary">{d.Year}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>) : <div className="col text-center">No record found!</div>}
</section>