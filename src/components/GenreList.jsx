import { genres } from "../mock-data/genres";
import { movies } from "../mock-data/movies";

const GenreList = ({ currentGenre, updateGenre}) => {
    const refineMovies = genre => movies.filter(movie => movie.genre === genre)
    const genreElements = genres.map(genre => <p onClick={() => updateGenre(refineMovies(genre.name))} id={genre.id}>{genre.name}</p>);
    return (
        <div className="genre-list"> 
            {genreElements}
        </div>
    )
}
export default GenreList;