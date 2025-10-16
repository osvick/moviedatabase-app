import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import { searchMovies, getRecommendedMovies } from "../services/movieService";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load recommended movies on first render
  useEffect(() => {
    const fetchRecommended = async () => {
      try {
        const data = await getRecommendedMovies();
        setRecommended(data);
      } catch (err) {
        console.error("Failed to fetch recommended movies", err);
      }
    };

    fetchRecommended();
  }, []);

  // Handle search
  const handleSearch = async (query) => {
    try {
      setLoading(true);
      setError("");
      const results = await searchMovies(query);
      if (results.Response === "False") {
        setError(results.Error || "No movies found");
        setMovies([]);
      } else {
        setMovies(results.Search || []);
      }
    } catch (err) {
      setError("Failed to fetch movies");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* App Logo */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">🎬 MovieFinder</h1>
      </div>

      {/* Heading */}
      <h1 className="text-2xl font-semibold text-center mb-4">
        Search for your favourite movies...
      </h1>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Error / Loading */}
      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center text-red-400 mt-4">{error}</p>}

      {/* Recommended Movies — show only when no search results */}
      {movies.length === 0 && recommended.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">🎬 Recommended Movies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {recommended.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        </div>
      )}

      {/* Search Results */}
      {movies.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">Search Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
