import React, { useEffect, useState } from "react";
import { Container, Movie, MovieList, Btn } from "./style";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Home() {
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const KEY = process.env.REACT_APP_KEY;

  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [searchResults, setSearchResults] = useState([]); 

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [KEY]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${searchQuery}&language=pt-BR`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.results);
      });
  }; 

  return (
    <Container>
      <nav className="navbar header">
        <div className="container-fluid">
          <a className="navbar-brand">Roth Films</a>
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2" type="search" placeholder="Search"
              aria-label="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <MovieList>
        {searchResults.length > 0
          ? searchResults.map((movie) => (
              <Movie key={movie.id}>
                <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
                <span>{movie.title}</span>
                <Link to={`/${movie.id}`}>
                  <Btn>Detalhes</Btn>
                </Link>
              </Movie>
            ))
          : movies.map((movie) => (
              <Movie key={movie.id}>
                <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
                <span>{movie.title}</span>
                <Link to={`/${movie.id}`}>
                  <Btn>Detalhes</Btn>
                </Link>
              </Movie>
            ))}
      </MovieList>
    </Container>
  );
}

export default Home;
