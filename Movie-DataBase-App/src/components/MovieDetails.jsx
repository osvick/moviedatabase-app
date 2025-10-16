export default function MovieDetails({ movie }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-6">
      <div className="flex-shrink-0 w-full md:w-1/3">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
          alt={movie.Title}
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <h1 className="text-3xl font bold mb-2">{movie.Title}</h1>
        <p className="text-gray-600 mb-2">{movie.Year} • {movie.Runtime}</p>
        <p className="text-gray-800 italic mb-4">{movie.Genre}</p>
        <p className="text-gray-700 leading-relaxed mb-4">{movie.Plot}</p>

        <div className="space-y-1 text-sm">
          <p><span className="font-semibold">Director:</span> {movie.Director}</p>
          <p><span className="font-semibold">Actors:</span> {movie.Actors}</p>
          <p><span className="font-semibold">Language:</span> {movie.Language}</p>
          <p><span className="font-semibold">IMDB Rating:</span> {movie.imdbRating}</p>
        </div>
      </div>
    </div>
  );
}
