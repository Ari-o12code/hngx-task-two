import SearchBar from "./SearchBar"
import poster from '../assets/Poster.png'
import tv from '../assets/tv.png'
import menu from '../assets/menu.png'

const PosterCard = () => {
  return (
    <div style={style} className="poster-card">
        <div className="search-area">
            <div className="movie-box-logo">
                <img src={tv} alt="tv icon" />
                <h2>Moviebox</h2>
            </div>
            <div className="search">
            <SearchBar />
            </div>
            <div className="sign-in">
                <p> <strong>Sign in</strong></p>
                <img src={menu} alt="menu icon" className="menu-icon"/>
            </div>
        </div>  
        <div className="poster-text">
            <h1>John Wick 3 : Parabellum</h1>
            <p>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
            <p className="trailer">Watch Trailer</p>
        </div>
    </div>
  )
}

const style = {
    backgroundColor: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%)',
    backgroundImage: `url(${poster})`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
}

export default PosterCard
