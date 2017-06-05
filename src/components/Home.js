import React from 'react';
import movies from '../movies.json';
import FeatureedMovie from './FeaturedMovie';

const Home = () => {
  const topFour = movies.slice(0,4);

  return (
    <div>
      <h2 className="featured-movies__header">
        Featured Movies
      </h2>
      <hr/>
      <div className="featured-movies">
        {topFour.map((movie,i) => (
            <FeatureedMovie
                movie={movie}
                key={i}
            />
        ))}
      </div>
    </div>
  );
};

export default Home;