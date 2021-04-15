import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView'
import SearchView from './components/SearchView'
import MovieView from './components/MovieView'
import NotFound from './components/NotFound'
import TopMoviesView from './components/TopMoviesView'
import { Route, Switch } from 'react-router';
import { useEffect, useState } from 'react';

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  const page = 1;

  useEffect(() => {
    if (searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=ce70936c03b59d8df306b2381b8e3dfc&language=en-US&query=${searchText}}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          console.log("called")
          setSearchResults(data.results);
        })
    }
  }, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText = {setSearchText}/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/about" component={AboutView}/>
        <Route path="/search">
          <SearchView keyword={searchText} searchResults={searchResults}/>
        </Route>
        <Route path="/movies/:id" component={MovieView} />
        <Route path="/top-movies">
          <TopMoviesView />
        </Route>
        <Route component ={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
