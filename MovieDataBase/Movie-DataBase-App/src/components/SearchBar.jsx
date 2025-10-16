import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-3 mb-6 w-full"
    >
      {/* ✅ Search Input */}
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="
          w-4/5               /* ~thumb width on mobile */
          sm:w-1/2           /* wider on larger screens */
          md:w-1/3           /* nice narrow bar on desktop */
          border border-gray-300
          p-2
          rounded-md
          text-sm
          focus:outline-none focus:ring-2 focus:ring-blue-500
          text-white
        "
      />

      {/* ✅ Search Button Below */}
      <button
        type="submit"
        className="
          bg-blue-600
          text-white
          px-6
          py-2
          text-sm
          rounded-md
          hover:bg-blue-700
          transition-colors
          w-1/2 sm:w-1/4 md:w-1/5
        "
      >
        Search
      </button>
    </form>
  );
}

