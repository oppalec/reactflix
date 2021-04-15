
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const notFoundUrl = 'https://via.placeholder.com/304x456?text=No+%20+Poster+%20+Available';
    const detailUrl = `/movies/${movie.id}`


    function renderNotFoundImage() {
        return <img src={notFoundUrl} class="card-img-top" alt={movie.original_title}/>
    }

    function renderPoster() {
        return <img src={posterUrl} class="card-img-top" alt={movie.original_title}/>
    }

    return (
        <div className="col-lg-3 col-md-2 col-sm-2 my-4">
            <div className="card">
                {movie.poster_path ? renderPoster() : renderNotFoundImage()}
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <p className="card-text">{movie.overview}</p>
                    <Link to={detailUrl} className="btn btn-primary">View More Details</Link>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;