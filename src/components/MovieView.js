import Hero from './Hero'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const MovieView = () => {
    const { id } = useParams()
    console.log(id)
    const [movieDetails, setMovieDetails] =useState({})
    const [isLoading, setIsLoading] = useState(true)

    const notFoundUrl = 'https://via.placeholder.com/304x456?text=No+%20+Poster+%20+Available';

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ce70936c03b59d8df306b2381b8e3dfc&language=en-US`)
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    setMovieDetails(data)
                    setIsLoading(false)
                }, 1500)
            })
    }, [id])

    function renderNotFoundImage() {
        return <img src={notFoundUrl} class="card-img-top" alt={movieDetails.original_title} className="img-fluid shadow rounded"/>
    }

    function renderPoster(posterPath) {
        return <img src ={posterPath} alt={movieDetails.original_title} className="img-fluid shadow rounded"/>
    }

    function renderMovieDetails() {
        if(isLoading) {
            return <Hero text = "Loading..." />
        }
        if (movieDetails) {
            const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            const backdropPath = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
            return (
            <>
                <Hero text = {movieDetails.original_title} backdrop = {backdropPath} />
                <div className = "container my-5">
                    <div className = "row">
                        <div className="col-md-3">
                            {movieDetails.poster_path ? renderPoster(posterPath) : renderNotFoundImage()}
                        </div>
                        <div className="col-md-9">
                            <h2>{movieDetails.original_title}</h2>
                            <p class="lead">{movieDetails.overview}</p>
                        </div>
                    </div>
                </div>
            </>
            )
        }
    }

    return renderMovieDetails()
};

export default MovieView;