import { movies } from "../mock-data/movies";
import MovieCard from "./MovieCard";

const MovieList = () => {
    const movieElements = movies.map(movie => <MovieCard id={movie.id} title={movie.title} genre={movie.genre} director={movie.director} year={movie.yearReleased}/>);
    return(
        <section>
            {movieElements}
        </section>
    )
}

export default MovieList;