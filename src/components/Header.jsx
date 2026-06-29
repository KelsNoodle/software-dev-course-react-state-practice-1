import GenreList from "./GenreList";


const Header = ({ currentGenre, updateGenre}) => {
    return (
        <header>
            <h1>The Movie Database</h1>
            <GenreList currentGenre={currentGenre} updateGenre={updateGenre}/>
        </header>
    )
}


export default Header;