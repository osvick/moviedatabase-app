import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div className="border rounded shadow p-2 flex flex-col items-center">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.jpg"}
          alt={movie.Title}
          className="w-full h-64 object-cover rounded"
        />
        <h3 className="font-semibold mt-2 text-center">{movie.Title}</h3>
        <p className="text-gray-600">{movie.Year}</p>
      </div>
    </Link>
  );
}
