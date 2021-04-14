import Hero from './Hero';
import MovieCard from './MovieCard'

//TMDB API KEY ce70936c03b59d8df306b2381b8e3dfc

const SearchView = ({keyword, searchResults}) => {
    const title = `You are searching for ${keyword}`
    
    const resultsHtml = searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />
    })
    
    return (
        <>
            <Hero text = {title}/>
            {resultsHtml &&
                <div className = "container">
                    <div className = "row">
                        {resultsHtml}
                    </div>
                </div>
            }
        </>
    );
};

export default SearchView;