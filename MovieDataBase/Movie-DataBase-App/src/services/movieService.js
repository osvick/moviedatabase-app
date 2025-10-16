import axios from "axios";

const BASE_URL = import.meta.env.VITE_OMDB_BASE_URL;
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

/**
 * 🔍 Searches for movies by title using the OMDB API.
 * @param {string} title - The search term for movies.
 * @returns {Promise<object>} The API response data.
 */
export async function searchMovies(title) {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        s: title,  // 's' is for search by title
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("OMDB API search error:", error);
    throw error;
  }
}

/**
 * 📄 Fetches the full details for a single movie using its ID.
 * @param {string} id - The unique IMDB ID (e.g., 'tt1234567').
 * @returns {Promise<object>} The API response data containing full movie details.
 */
export async function getMovieDetails(id) {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        i: id,           // 'i' is for searching by ID
        plot: 'full',    // Request the full plot summary
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`OMDB API detail fetch error for ID ${id}:`, error);
    throw error;
  }
}

/**
 * 🎬 Fetches recommended movies based on a keyword or genre.
 * @param {string} keyword - e.g., "Avengers", "action", "romance"
 * @returns {Promise<Array>} Array of recommended movies
 */
export async function getRecommendedMovies(keyword = "popular") {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        s: keyword,   // simple recommendation using keyword search
        apikey: API_KEY,
      },
    });

    // OMDB returns an object with Search array
    if (response.data && response.data.Search) {
      return response.data.Search;
    } else {
      return [];
    }
  } catch (error) {
    console.error("OMDB API recommendation error:", error);
    return [];
  }
}
