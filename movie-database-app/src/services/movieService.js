import axios from "axios";

const BASE_URL = import.meta.env.VITE_OMDB_BASE_URL;
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export async function searchMovies(title) {
    try {
        const response = await axios.get(`${BASE_URL}`, {
            params: {
                s: title,
                apikey: API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        console.error("OMDB API error:",error);
        throw error;
    }
}