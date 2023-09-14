import { useContext } from "react"
import MoviesContext from "../context/movies"
import MovieShow from './MovieShow'

const MovieList = () => {
const {movies} = useContext(MoviesContext)

  return (
    <div className="movies-container">
      <h1>Top Rated Movies</h1>
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
