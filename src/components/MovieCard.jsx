

const MovieCard = ({id, title, genre, director, year}) => {
    return (
        <article className="card" id={id}>
            <h2>Title: {title}</h2>
            <p>Genre: {genre}</p>
            <p>Director: {director}</p>
            <p>Year Released: {year}</p>
        </article>
    )
}
export default MovieCard;