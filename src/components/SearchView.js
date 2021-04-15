import Hero from './Hero';
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom';

//TMDB API KEY ce70936c03b59d8df306b2381b8e3dfc

const SearchView = ({keyword, searchResults}) => {
    const title = `You are searching for ${keyword}`
    
    const resultsHtml = searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />
    })
    

    function renderResults() {
        console.log("results found" + resultsHtml);
        return <div className = "container">
            <div className = "row">
                {resultsHtml}
            </div>
        </div>
    }

    function renderNoResults() {
        console.log("called no results");
        return <div className="p-5 hero-container">
            <h1 className="hero-text">No results found!</h1>
            <Link to="/">
            Go Home
            </Link>
        </div>     
    }

    return (
        <>
            <Hero text = {title}/>
            {Array.isArray(resultsHtml) && resultsHtml.length ? renderResults() : renderNoResults()}
        </>
    );
};

export default SearchView;