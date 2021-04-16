import Hero from "./Hero";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const TopMoviesView = () => {
  const { page } = useParams();
  const title = `Top Movies (Page ${page})`;

  let nextPageIndex = parseInt(page) + 1;
  const nextPageUrl = `/top-movies/${nextPageIndex}`;

  let prevPageIndex = parseInt(page) - 1;
  const prevPageUrl = `/top-movies/${prevPageIndex}`;

  const firstPageUrl = `/top-movies/1`;
  let lastPageUrl = `/top-movies/`;

  console.log(`url next: ${nextPageUrl} \n url prev: ${prevPageUrl}`);
  const [topMovies, setTopMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=ce70936c03b59d8df306b2381b8e3dfc&language=en-US&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setTopMovies(data.results);
          setTotalPages(data.total_pages);
          setIsLoading(false);
        }, 1000);
      });
  }, [page]);

  const topMoviesHtml = topMovies.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });

  function getLastPage() {
    if (totalPages != 0) {
      lastPageUrl = `/top-movies/${totalPages}`;
    }
    return lastPageUrl;
  }

  function renderResults() {
    // console.log("results found" + resultsHtml);
    return (
      <>
        <Hero text={title} />
        <div className="container">
          {page > 1 ? (
            <div>
              <Link className="btn btn-primary my-3" to={prevPageUrl}>
                Previous
              </Link>
              {page != totalPages && (
                <Link className="btn btn-primary mx-1" to={nextPageUrl}>
                  Next
                </Link>
              )}
              <Link className="btn btn-primary mx-1" to={firstPageUrl}>
                First
              </Link>
              {page != totalPages && (
                <Link className="btn btn-primary mx-1" to={getLastPage}>
                  Last
                </Link>
              )}
            </div>
          ) : (
            <div>
              <Link className="btn btn-primary my-3" to={nextPageUrl}>
                Next
              </Link>
            </div>
          )}
          <div className="row">{topMoviesHtml}</div>
        </div>
      </>
    );
  }

  function renderNoResults() {
    // console.log("called no results");
    return (
      <div className="p-5 hero-container">
        <h1 className="hero-text">No results found!</h1>
        <Link to="/">Go Home</Link>
      </div>
    );
  }

  function renderTopMovies() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (Array.isArray(topMoviesHtml) && topMoviesHtml.length) {
      return renderResults();
    } else {
      return renderNoResults();
    }
  }
  return renderTopMovies();
};

export default TopMoviesView;
