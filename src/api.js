import axios from 'axios';

const searchMovies = async (term) => {
    const response = await axios.get('https://api.themoviedb.org/3/movie/10', {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWIwYjQ2MTgzZDhlZDUxZjMzYTJiMTFkZmY5MTM2YyIsInN1YiI6IjY0ZmYyNTM3MmRmZmQ4MDBlM2QzNjkzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.90hRFLhLKx_N308ekgY5ZMhy1XoMhm3qtclrSW_Dvw0'
        },
        params: {
            query: term,
        }
    });
    
    return response.data;
};

export default searchMovies;