import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
	let [currentGenre, updateGenre] = useState(0);
	return (
		<>
			<Header currentGenre={currentGenre} updateGenre={updateGenre}/>
			<h2></h2>
			<MovieList />
		</>
)
}

// Display a list of genres based on the available movie data.
// Allow the user to select a genre (for example, by clicking on a genre name).
// Display only the movies that match the selected genre.
// Update the movie list automatically when the user selects a different genre.
// Use conditional rendering to display an error message if the user selects a
// genre with no movies.

export default App;
