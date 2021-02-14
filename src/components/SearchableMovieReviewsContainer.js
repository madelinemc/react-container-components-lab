import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
//this component should be a class component that maintain state.
//Optional: The SearchableMovieReviewsContainer should have a top-level wrapping element with class searchable-movie-reviews

class SearchableMovieReviewsContainer extends React.Component {
    state = {
        searchTerm: '',
        reviews: []
    }
  
    handleChange = (event) => {
      this.setState({
        searchTerm: event.target.value
      })
    };
  
    handleSubmit = (event) => {
      event.preventDefault();
    
      fetch(URL.concat(this.state.searchTerm))
        .then(resp => resp.json())
        .then(reviewObj => this.setState({ reviews: reviewObj.results }))
    };
  
    render() {
      return (
        <div className="searchable-movie-reviews">
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="search" value={this.state.searchTerm} onChange={this.handleChange}/>
            <input type="submit" value="Search" />
          </form>
          <MovieReviews reviews={this.state.reviews} />       
        </div>
      );
    }
  }
  
  export default SearchableMovieReviewsContainer;
  