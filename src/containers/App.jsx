import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import HomePage from '../components/HomePage';
import MovieDetails from '../components/MovieDetails';




function App() {

  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<MovieDetails />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
