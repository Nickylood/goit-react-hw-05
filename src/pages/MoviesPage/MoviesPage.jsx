import css from "./MoviesPage.module.css";
import { useEffect, useState } from "react";
import { searchMovies } from "../../movies-api";
import toast, { Toaster } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MoveList/MoveList";
import SearchForm from "../../components/SearchForm/SearchForm";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");
  const query = searchParams.get("query") ?? "";


  const onSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      toast.error("Please enter text to search movies!");
      return;
    }
    setSearchParams({ query: value });
    setValue(""); 
  };

  useEffect(() => {
    if (!query)  return;
     
    async function getData() {
      try {
        setIsLoading(true);
        const data = await searchMovies(query);

        if (data.results.length === 0) {
          alert(`Sorry don't found any by query: ${query}`);
          toast.error("Please try another query!");
          return;
        }
        setMovies(data.results);
      } catch (error) {
        setError(true);
        console.error(error);
        toast.error("Error fetching movies");
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [query]);

  const movieFilter = (e) => {
    setValue(e.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={css.container}>
      <Toaster />
      <SearchForm
        onSubmit={onSubmit}
        value={value}
        movieFilter={movieFilter}
      />
      {isLoading && <b>Loading search movies...</b>}
      {error && <b>HTTP error!🤔</b>}
      <MovieList movies={filteredMovies} />
    </div>
  );
}
