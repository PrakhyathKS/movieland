import {useEffect, useState} from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard  from "./MovieCard";
// api key : a708943a

const API_URL ='https://www.omdbapi.com?apikey=a708943a';

const movie1={
    "Title": "Spider-Man Title Reveal",
    "Year": "2021",
    "imdbID": "tt14122734",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjRjMmQ2NDQtNmI5NC00N2EwLTkwYWQtOTM2OGZjMmI5YmRjXkEyXkFqcGdeQXVyMTI0NTA1MDI3._V1_SX300.jpg"
}

const App = () => {
    const [movie,SetMovies]= useState([]);
    const [searchTerm,SetsearchTerm]= useState('');


    const searchMovies = async(title)=>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        

        SetMovies(data.Search);
    }

useEffect(()=>{
    searchMovies('Spiderman');
},[]);

    return(
       <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                placeholder="search for movies" 
                value={searchTerm} 
                onChange={(e)=> SetsearchTerm(e.target.value)}
                />
                <img src={SearchIcon} 
                alt="search"
                onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movie?.length > 0 ?
                ( <div className="container">
                { movie.map((movie) =>(
                    <MovieCard movie={movie}/>
                ))}
                    
                </div>

                ): 
                    (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                    )
            }

           
        </div>
    )
};
    

export default App;