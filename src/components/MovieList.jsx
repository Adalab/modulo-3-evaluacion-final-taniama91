import MovieItem from './MovieItem';
import "../styles/App.scss"

const MovieList = ({movies}) => {
  const renderMovies = movies.map((movie) => {
    return (
      <li className="card" key={movie.id}>
        <MovieItem movie={movie}></MovieItem>
      </li>
    );
  });
  return (
    <>
      <ul className='ul'>{renderMovies}</ul>
    </>
  );
};
export default MovieList;
