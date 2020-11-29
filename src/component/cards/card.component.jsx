import React from 'react';
import './card.style.css';

export const Card = props => (
    <div className='card-container'>
        <img alt="movie" src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} />
        <div className='texts'>
            <h2>
                {props.movie.title}
            </h2>
            <p>{props.movie.overview}</p>
        </div>
    </div>
);