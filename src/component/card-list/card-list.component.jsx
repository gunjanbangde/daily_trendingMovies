import React from 'react';
import './card-list.style.css';
import { Card } from '../cards/card.component';

export const CardList = props => (
    <div className='card-list'>
        {props.movies.map(movie => (
            <Card key={movie.id} movie={movie} />
        ))}
    </div>
);