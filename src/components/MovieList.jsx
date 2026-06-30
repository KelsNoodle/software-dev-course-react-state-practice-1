import { movies } from "../mock-data/movies";
import MovieCard from "./MovieCard";

const MovieList = ({ currentGenre }) => {
    return(
        <section>
            {currentGenre}
        </section>
    )
}

export default MovieList;