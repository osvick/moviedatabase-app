import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/movieService";
import MovieDetails from "../components/MovieDetails";

export default function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError("Failed to load movie details.");
      } finally {
        setLoading(false);
      }
    }
    fetchDetails();
  }, [id]);

  if (loading) return <div className="p-6 text-center">Loading movie details...</div>;
  if (error) return <div className="p-6 text-center text-red-500">{error}</div>;
  if (!movie) return null;

  return (
    <div className="max-w-4xl mx-auto">
      <MovieDetails movie={movie} />
    </div>
  );
}
