import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ searchType, handleChange }) => (
    <input
        className='search'
        type='search'
        placeholder={`Search ${searchType}`}
        onChange={handleChange}
    />
);