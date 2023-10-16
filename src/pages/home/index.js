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
              aria-label="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>

      <h1 class="titlePOP">Filmes Destacados</h1>

      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/img/Missão_Impossivel.png" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Missão Impossível: acerto de contas</h5>
              <p>Eles devem rastrear uma nova e aterrorizante arma que, se cair nas mãos erradas, pode representar uma ameaça para toda a humanidade.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/img/fnaf.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Five Nights at Freddy's - O Pesadelo Sem Fim</h5>
              <p>Sob o comando do gerente Steve Raglan (Matthew Lillard), o lugar é muito famoso por seus característicos robôs animados que fazem a festa das crianças durante o dia. Porém, quando chega a noite, um segredo obscuro e mortal surge: os bonecos animatrônicos se transformam em assassinos psicopatas.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/img/granTurismo.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Gran Turismo de Jogador a Corredor</h5>
              <p>inspirado na história real de Jann Mardenborough (Archie Madekwe), que ao vencer um torneio de Playstation promovido pela montadora Nissan, passa a competir em torneios reais de corrida sob o treinamento de Jack Salter (David Harbour).</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/img/johnWick.jpeg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>John Wick 4: Baba Yaga</h5>
              <p>Famoso assassino de aluguel John Wick (Keanu Reeves) descobre um caminho para derrotar a Alta Cúpula, que é a autoridade suprema no submundo do crime.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <h2 class="titleFilmes">Filmes em Catalago</h2>

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
