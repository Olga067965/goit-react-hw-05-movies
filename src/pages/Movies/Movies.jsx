import { useState, useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import { fetchSearchMovie } from 'configAPI';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchMovies/SearchMovies';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
		}
		const abortController = new AbortController();
    const getMovie = async () => {
      if (abortController.current) {
        abortController.current.abort();
      }
      abortController.current = new AbortController();

      try {
        setIsLoading(true);
        setIsError(null);

        const { results } = await fetchSearchMovie(query, {
          signal: abortController.current.signal,
        });

        setMovies(results);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
		getMovie();
		return () => {
      abortController.abort();
    };
  }, [query]);

  return (
    <>
      {isLoading && <Loader />}
      {isError && !isLoading && <p>No movie.</p>}
      <SearchForm />
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;