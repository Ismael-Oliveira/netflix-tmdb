import React from 'react';
import './index.css';

const MovieListArea = ({scrollX, items}) => {

    return(
        <div className="movie--list--area" style={{
            marginLeft: scrollX,
            width: items.length * 180
        }}>
            {items.length > 0 && items.map((item, key) => {
                return (
                    <div className="movie--list" key={key}>
                        <img src={`https://image.tmdb.org/t/p/w400${item.poster_path}`} alt={item.original_language} key={key}/>
                    </div>
                )
            })}
        </div>
    )
}

export default MovieListArea;