import heart from '../assets/Heart.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const MovieShow = ({movie}) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = ()=>{
    setIsClicked(!isClicked)
  }

  const style = {
    backgroundColor: isClicked? '#ff496c' : '#9CA3AF'
}
  
  return (
    <div className="movie-card" data-testid = 'movie-card'>
      <img style={style} onClick={handleClick} className='heart-icon' src={heart} alt="heart icon" />
      <Link className='movie-link' to={`/movies/${movie.id}`}>
        <img className='movie-poster' data-testid = 'movie-poster' src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`${movie.title} Poster`} />
        <div className="movie-release-date" data-testid = 'movie-release-date'>
          {movie.release_date}
        </div>
        <div className="movie-title" data-testid = 'movie-title'>
          {movie.title}
        </div>
      </Link>
    </div>
  )
}

export default MovieShow
