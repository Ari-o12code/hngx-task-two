import { useState, useContext } from "react";
import MoviesContext from "../context/movies"
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  const {fetchSearchMovies} = useContext(MoviesContext)
  const [term, setTerm] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    fetchSearchMovies(term)
    setTerm('')
  }

  const handleChange = (event) => {
    setTerm(event.target.value)
  }

  return (
    <div>
      <form className="search" onSubmit={handleSubmit}>
        <input value={term} onChange={handleChange} type="text" />
        <button>
          <BiSearch/>
        </button>
      </form>
    </div>
  )
}

export default SearchBar
