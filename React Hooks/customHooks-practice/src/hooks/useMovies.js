import { useState } from "react";
import { getMovies } from "../utils/api";
import { useEffect } from "react";
const useMovies = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getMovies();
      setMovies(movies);
      setLoading(false);
    };

    fetchMovies();

    return () => {
      setLoading(true);
    };
  }, []);

  return [movies, loading];
};

export default useMovies;
