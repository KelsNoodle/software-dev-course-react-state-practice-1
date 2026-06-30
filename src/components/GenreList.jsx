import { genres } from "../mock-data/genres";
import { movies } from "../mock-data/movies";
import MovieCard from "./MovieCard";

const GenreList = ({ currentGenre, updateGenre}) => {
    const refineMovies = genre => movies.filter(movie => movie.genre === genre)
    const createMovieElements = (movieList) => movieList.map(movie => <MovieCard id={movie.id} title={movie.title} genre={movie.genre} director={movie.director} year={movie.yearReleased}/>);
    const genreElements = genres.map(genre => <p onClick={() => updateGenre(createMovieElements(refineMovies(genre.name)))} id={genre.id}>{genre.name}</p>);
    return (
        <div className="genre-list"> 
            {genreElements}
        </div>
    )
}
export default GenreList;