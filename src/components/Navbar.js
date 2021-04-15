import { useHistory, Link } from 'react-router-dom';

const Navbar = ({searchText, setSearchText}) => {
    const history = useHistory();
    const updateSearchText = (e) => {
      // history.push('/search')
      setSearchText(e.target.value)
    }

    function searchMovies(e) {
      e.preventDefault();
      history.push('/search')
      setSearchText(e.target.value)
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Movie Browser</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/top-movies">Top Movies</Link>
              </li>
              {/* <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="somewhere.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="somewhere.html">Action</Link></li>
                  <li><Link className="dropdown-item" to="somewhere.html">Another action</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to="somewhere.html">Something else here</Link></li>
                </ul>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link disabled" to="somewhere.html" tabIndex="-1" aria-disabled="true">Coming Soon</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
              value={searchText}
              onChange={updateSearchText}
              />
              <button className="btn btn-outline-success" 
                onClick={searchMovies}>Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;
  
  