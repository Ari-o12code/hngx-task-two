import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BiLoaderCircle } from "react-icons/bi";
import tv from '../assets/tv.png'
import calendar from '../assets/Calendar.png'
import home from '../assets/Home.png'
import projector from '../assets/projector.png'
import tvshow from '../assets/TVshow.png'
import play from '../assets/Play.png'
import logout from '../assets/Logout.png'
import rectangle from '../assets/Rectangle.png'


const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            params: {
              api_key: '81b0b46183d8ed51f33a2b11dff9136c',
              language: 'en-US',
            },
          }
        );

        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div className='loader-circle'>Loading...<BiLoaderCircle/></div>;
  }

  const backgroundImageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const style = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}

  return (
    <div className='movie-container'>
        <div className='side-bar'> 
            <div className='side-bar-list'>
                <div className='flex movie-box'>
                <img src={tv} alt="home icon" />
                <p>MovieBox</p>
                </div>

                <div className='flex'>
                <img src={home} alt="home icon" />
                <p>Home</p>
                </div>
                
                <div className='flex movie'>
                <img src={projector} alt="movie projector icon" />
                <p>Movies</p>
                </div>

                <div className='flex'>
                <img src={tvshow} alt="tvshow icon" />
                <p>Tv Series</p>
                </div>
                
                <div className='flex'>
                <img src={calendar} alt="calender icon" />
                <p>Upcoming</p>
                </div>
            </div>
            
            <div className='rectangle'>
                <p>
                    Play movie quizes and earn free tickets
                </p>
                <p>
                    50k people are playing now
                </p>
                <div className='play-btn'>
                    Start Playing
                </div>
            </div>

            <div className='flex logout'>
              <img src={logout} alt="log out icon" />
              <p>Log Out</p>
            </div>
        </div>

        <div className='movie-img' style={style}>
                <img src={play} alt="" />
        </div> 

        <div className='movie-details-container'>
            <div className='movie-details'>
              <p data-testid = 'movie-title'>{movie.title}</p>
              <div className="dot"></div>
              <p data-testid = 'movie-release-date'>{movie.release_date}</p>
              <div className="dot"></div>
              <p data-testid = 'movie-runtime'>{movie.runtime}</p>
            </div>
            <p className='movie-overview' data-testid = 'movie-overview'>{movie.overview}</p>
            <div>
              <p>Directors:</p>
              <p>Writers:</p>
              <p>Stars:</p>
              <div className='flex rated'>
                <p className='show-btn show rated-movie'>Top rated Movie</p>
                <p className='show-btn award'>Award 9 nominee</p>
              </div>
            </div>
        </div>
        <div className='watch-options'>
          <p className='show-btn show'>See Showtimes</p>
          <p className='show-btn'>More watch options</p>
          <img src={rectangle} alt="best movies poster" />
        </div>

    </div>
  );
};

export default MovieDetails;

