import React, { useState } from 'react'; 
import './index.css';
import MovieListArea from '../MovieListArea';

export default function MovieRows({title, results}) {

    const [ scrollX, setScrollX ] = useState(0);

    const handleArrowLeft = () => {
        let x = scrollX - (window.innerWidth / 2);

        if(x < (window.innerWidth - results.length*180)) {
            x = (window.innerWidth - results.length*180);
        }

        setScrollX(x);
    }

    const handleArrowRight = () => {
        let x = scrollX + (window.innerWidth / 2);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x);
    }
    return (
        <section className='movie-row-section'>
            <h2>{title}</h2>
            <div className='movie--arrow--right' onClick={handleArrowRight}>
                <span>&gt;</span>
            </div>
            <div className='movie--arrow--left' onClick={handleArrowLeft}>
                <span>&lt;</span>
            </div>
            <MovieListArea scrollX={scrollX} items={results} />
        </section>
    );
}