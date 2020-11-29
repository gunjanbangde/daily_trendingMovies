import React, { Component } from 'react';
import { CardList } from './component/card-list/card-list.component.jsx';
import { SearchBox } from './component/search-box/search-box.component.jsx';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=53919d6b6d5671ee64b94736eb8bab57')
      .then(response => response.json())
      .then(res => this.setState({ movies: res.results }));
  }

  render() {
    const { movies, searchField } = this.state;
    console.log(searchField);
    const filteredMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(filteredMovies);
    return (
      <div className="App">
        <SearchBox
          searchType='Trending Movies'
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList movies={filteredMovies} />
      </div >
    );
  }
}

export default App;
