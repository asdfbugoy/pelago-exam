import React from 'react';
import axios from 'axios';
import useSearchForm from './hooks/Search';
import Pagination from './components/Pagination';
import List from './components/List';
import Search from './components/Search';
import Advanced from './components/Advanced';
import { inject } from 'mobx-react';

export default inject('store')((props) => {
    const ref = React.useRef();
    const [movies, setMovies] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isAdvanced, setIsAdvanced] = React.useState(false);
    const [page, setPage] = React.useState(1);
    const [pages, setPages] = React.useState(0);
    const onSubmit = () => fetchMovies();
    const { inputs, handleInputChange, handleSubmit } = useSearchForm({}, onSubmit);

    // React.useEffect(() => fetchMovies(), []);

    async function fetchMovies(page) {
        const params = isAdvanced
            ? {
                apikey: '185c5ebb',
                s: ref.current.value,
                ...inputs
            }
            : {
                apikey: '185c5ebb',
                s: ref.current.value,
            }
        setIsLoading(true);
        await axios({
            method: 'post',
            url: 'https://www.omdbapi.com',
            params: page ? { ...params, page: page } : params
        })
            .then(res => {
                setMovies(res.data.Search);
                setIsLoading(false);
                setPage(page);
                setPages(res.data.totalResults ? parseInt(res.data.totalResults / 10, 10) : 0)
            })
            .catch(err => console.log(err));
    }

    return <React.Fragment>
        <article className="container">
            <header className="header card border shadow mb-5">
                <div className="card-body">
                    <div className="primary">hey</div>
                    <div className="secondary">cinema</div>
                </div>
            </header>

            <section className="mb-5" >
                <Search forwardedRef={ref} isLoading={isLoading} isAdvanced={isAdvanced} setIsAdvanced={setIsAdvanced} fetchMovies={fetchMovies} />
                {isAdvanced && <Advanced fetchMovies={fetchMovies} isLoading={isLoading} handleSubmit={handleSubmit} handleInputChange={handleInputChange} inputs={inputs} />}
            </section>

            {!isLoading ? <List movies={movies} /> : <h1 className="text-center mb-3"><i className="fa fa-spin fa-spinner"></i> Loading</h1>}

            {pages > 1 && <Pagination pages={pages} page={page} fetchMovies={fetchMovies} />}
        </article>
    </React.Fragment>
})
