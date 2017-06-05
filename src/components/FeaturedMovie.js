import React from 'react';
import PropTypes from 'prop-types';

const FeaturedMovie = ({movie}) => (
  <div className="featured-movie">
    <div className="featured-movie__image">
      <img src={movie.image} alt={movie.name}/>
    </div>

    <div className="featured-movie__info">
      <p><b>{movie.name}</b></p>
      <p>{movie.director}</p>
      <p>{movie.released}</p>
    </div>
  </div>
);

FeaturedMovie.propTypes = {
  movie: PropTypes.shape({
    director: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    released: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired
};

export default FeaturedMovie;