import { useContext } from "react"
import { BiLoaderCircle } from "react-icons/bi";
import MoviesContext from "../context/movies"
import MovieShow from './MovieShow'

const MovieList = () => {
const {movies} = useContext(MoviesContext)

if (!movies) {
  return <div className='loader-circle'>Loading...<BiLoaderCircle/></div>;
}

  return (
    <div className="movies-container">
      <h1>Top Movies</h1>
      <div className="movies-list">
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieShow movie = {movie} />
          </div> 
        ))}
      </div>
    </div>
  )
}

export default MovieList
