/* eslint-disable react/prop-types */

import MovieItem from './MovieItem';
import "../styles/layout/_cards.scss"
import { Link } from 'react-router-dom';

const MovieList = ({movies}) => {
  const renderMovies = movies.map((movie) => {
    return (
      <Link to = {"/movie/" + movie.id}>
        <li className="card" key={movie.id}>
          <MovieItem movie={movie}/>
        </li>
      </Link>
    );
  });
  return (
    <>
      <ul className='ul'>{renderMovies}</ul>
    </>
  );
};
export default MovieList;
