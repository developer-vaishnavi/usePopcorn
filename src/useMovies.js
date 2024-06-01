import { useState, useEffect } from "react";
const KEY = "1c569913";
export function useMovies(query, callback) {
  const [movies, setMovies] = useState([]);
  // const [watched, setWatched] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      callback?.();
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setLoading(true);
          setError("");
          const rest = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!rest.ok) {
            throw new Error("Something went wrong with fetching movies");
          }
          const data = await rest.json();
          if (data.Response === "False") {
            throw new Error("Movie Not Found");
          }
          //console.log(data.Search);
          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (err.name != "AbortError") setError(err.message);
        } finally {
          setLoading(false);
        }
      }
      if (!query.length) {
        setMovies([]);
        setError("");
        return;
      }
      // handleCloseMove();
      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, isLoading, error };
}
