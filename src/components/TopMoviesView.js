import Hero from './Hero';
import MovieCard from './MovieCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TopMoviesView = () => {
    const [page, setPage] = useState(1)
    const title = `Top Movies (Page ${page})`
    const [topMovies, setTopMovies] = useState([])
    const [totalPages, setTotalPages] = useState(0);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=ce70936c03b59d8df306b2381b8e3dfc&language=en-US&page=${page}`)
        .then(response => response.json())
        .then(data => {
            console.log("called data")
            setTopMovies(data.results)
            setTotalPages(data.total_pages)
        })
    }, [page]);
    
    const topMoviesHtml = topMovies.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />
    })
    
    function renderResults() {
        // console.log("results found" + resultsHtml);
        return <div className = "container">
            <div className = "row">
                {topMoviesHtml}
            </div>
        </div>
    }

    function renderNoResults() {
        // console.log("called no results");
        return <div className="p-5 hero-container">
            <h1 className="hero-text">No results found!</h1>
            <Link to="/">
            Go Home
            </Link>
        </div>     
    }

    function renderNextResults() {
        if (page < totalPages) {
            let new_page = page
            new_page++
            setPage(new_page)
        }
    }

    function renderPrevResults() {
        if (page != 1) {
            let new_page = page
            new_page--
            setPage(new_page)
        }
    }

    return (
        <>
            <Hero text = {title}/>
            {page > 1 ? 
                <div>
                    <button className = "btn btn-primary my-3 mx-5" onClick={renderPrevResults}>Previous Page</button>
                    <button className = "btn btn-primary" onClick={renderNextResults}>Next Page</button>
                </div> :
                <button className = "btn btn-primary my-3 mx-5" onClick={renderNextResults}>Next Page</button>
            }
            {Array.isArray(topMoviesHtml) && topMoviesHtml.length ? renderResults() : renderNoResults()}
        </>
    );
};

export default TopMoviesView;