import "../styles/App.scss"

const MovieItem = ({movie}) => {
return (
    <>
    <a href="#"></a>
    <img className="img" src={movie.poster} alt={movie.title}/>
    <h3>{movie.title}</h3>
    <span>{movie.year}</span>
    <p>{movie.full_line}</p>

    </>
    )
};
export default MovieItem;