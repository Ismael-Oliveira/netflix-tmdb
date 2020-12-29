import React from 'react';
import './index.css';

export default function FeaturedMovie({movie}) {
    
    let first_air_date = new Date(movie.first_air_date);
    let genres = movie.genres.map(genre => {
        return genre.name;
    })
    let overview = movie.overview.substring(0, 300)+'..';

    return (
        <section className="featured__movie" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            backgroundSize: 'cover',        
            backgroundPosition: 'center',        
        }}>
            <div className="featured__opacity--botton "> 
                <div className="featured__opacity--left flex-container">
                    <div className="featured__movie--name">{movie.name}</div>
                    <div className="featured__movie--info">
                        <div className="featured--score">{movie.vote_average} Pontos</div>
                        <div className="featured--release">{first_air_date.getFullYear()}</div>
                        <div className="featured--season">{movie.number_of_seasons} temporada{movie.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured__movie--overview">{overview}</div>
                    <div className="featured__movie--action">
                        <a href="/watch" className="featured--watch" >► Assistir</a>
                        <a href="/watch" className="featured--mylist" >+ Minha Lista</a>
                    </div>
                    <div className="featured__movie--genres">
                        <strong>Gêneros: {genres.join(', ') }</strong>
                    </div>
                </div>
            </div>
        </section>
       )
}