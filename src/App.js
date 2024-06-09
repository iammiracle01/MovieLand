import './App.css';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';




const API_URL = 'http://www.omdbapi.com?apiKey=524f5358';
const App = () => {

  const [movies, setMovies] = useState();
  const [searchTerm, setSearchTerm] = useState('');

  const search = (e) =>{
    setSearchTerm(e.target.value)
  }
  const displaySearch = () =>{
    searchMovies(searchTerm)
  }

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json()
    setMovies(data.Search);
  } 
  
  useEffect(()=>{
    searchMovies('Spiderman')
  }, []);

  return(
    <div className = 'App'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input placeholder='Search for movies' value={searchTerm} onChange={search}/>
        <img src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"alt="search"onClick={dispatchEvent}/>
      </div>
      {
        movies?.length > 0
        ? (
          <div className='container'>
            {
              movies.map((movie) => <MovieCard movie={movie}/>)
            }
          </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }
    </div>
  );

}

export default App;
