import React, { useEffect, useState } from 'react';
import Tmdb from './tmdb'
import MovieRows from './Components/MovieRows';
import FeaturedMovie from './Components/FeaturedMovie';
import Header from './Components/Header'

import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [infoMovie, setInfoMovie] = useState(null);
  const [blackHeader, setBlackHeader] = useState(true);
  
  useEffect(() => {    

    const loadAll = async function() {
      let listGenres = await Tmdb.getHomeList();
      
      let genres = listGenres.filter( item => item.slug === 'originals');
      let sizeArrayGenres = genres[0].items.results.length;
      let randomChosen =  Math.floor(Math.random()*sizeArrayGenres);

      let movieChosen = genres[0].items.results[randomChosen];
      setMovies(listGenres);
      
      let info = await Tmdb.getInfoMovie(movieChosen.id, 'tv');
      setInfoMovie(info);
      
    } 
    loadAll();
  }, []);
  
  useEffect(() => {
    const scrollListener = () => {
      if(window.pageYOffset > 10) {
        setBlackHeader(false)
      } else {
        setBlackHeader(true);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }) 

  return (
    <div className="App">
      <Header headerOn = {blackHeader}/>
      {
        infoMovie && 
          <FeaturedMovie movie={infoMovie}/>
      }
      {
        movies.length > 0 && movies.map((movie, i) => {
            return (
              <MovieRows title={movie.title} results={movie.items.results} key={i}/>
            )
        })
      }

      
      <footer>
          Desenvolvido com <span role='img' aria-label='coraçõa'>❤</span> por Ismael Oliveira<br/>
          Direitos de imagem para Netflix<br/>
          Dados pegos da Api Themoviedb.org<br/>
          Plataforma de ensino b7Web.com.br
      </footer>
      
      {movies.length <= 0 && 
        <div className="loading">
          <img src="https://www.filmelier.com/pt/br/news/wp-content/uploads/2020/03/netflix-loading.gif" alt='carregando'/>
        </div>
      }
    
    </div>

    
  );
}

export default App;
