import { createContext, useState, useEffect } from "react";
import axios from "axios";

const MoviesContext = createContext();

function Provider ({ children }) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchTopRatedMovies() {
          try {
            const apiKey = '81b0b46183d8ed51f33a2b11dff9136c';
            const response = await axios.get(
              `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
            );
    
            const top10Movies = response.data.results.slice(0, 10);
            setMovies(top10Movies);
          } catch (error) {
            console.error('Error fetching top-rated movies:', error);
          }
        }
    
        fetchTopRatedMovies();
      }, []);

      async function fetchSearchMovies(term) {
        try {
          const apiKey = '81b0b46183d8ed51f33a2b11dff9136c';
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${term}`
          );
  
          const searchMovies = response.data.results.slice(0, 10);
          setMovies(searchMovies);
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      }

    const value = {
        movies,
        fetchSearchMovies,
    }


    return (
        <MoviesContext.Provider value={value}>
            {children}
        </MoviesContext.Provider>
    )
}

export {Provider}

export default MoviesContext;