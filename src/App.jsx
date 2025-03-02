import Logo from './components/Logo';
import NumResults from './components/NumResults';
import Search from './components/Search';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import MovieList from './components/MovieList';
import WatchedSummary from './components/WatchedSummary';
import WatchedMoviesList from './components/WatchedMoviesList';
import Box from './components/Box';
import Loader from './components/Loader';
import Error from './components/Error';
import MovieDetails from './components/MovieDetails';

const KEY = '1283ba8c';
export default function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  function selectMovie(id) {
    setSelectedId((prevId) => (prevId === id ? null : id));
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleDeleteMovie(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  useEffect(() => {
    const controller = new AbortController();
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError('');
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );
        if (!res.ok)
          throw new Error('Something happened, unable to fetch movies!');
        const data = await res.json();
        if (data.Response === 'False') throw new Error('Movie not found!');
        setMovies(data.Search);
        setError('');
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    if (query.length < 0) {
      setMovies([]);
      setError('');
    }

    handleCloseMovie();
    fetchMovies();

    return () => {
      controller.abort();
    };
  }, [query]);

  return (
    <>
      <Header>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Header>
      <main className="main">
        <Box>
          <Button
            onClick={() => setIsOpen1((open) => !open)}
            isOpen={isOpen1}
          />
          {error && <Error error={error} />}
          {isLoading && <Loader />}
          {isOpen1 && !isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={selectMovie} />
          )}
        </Box>

        <Box>
          <Button
            onClick={() => setIsOpen2((open) => !open)}
            isOpen={isOpen2}
          />
          {isOpen2 &&
            (selectedId ? (
              <MovieDetails
                selectedId={selectedId}
                watched={watched}
                onAddWatched={handleAddWatched}
                onCloseMovie={handleCloseMovie}
              />
            ) : (
              <>
                <WatchedSummary watched={watched} />
                <WatchedMoviesList
                  watched={watched}
                  onDeleteMovie={handleDeleteMovie}
                />
              </>
            ))}
        </Box>
      </main>
    </>
  );
}
