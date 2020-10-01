import Axios from "axios"

// Get Gifs
export const fetchGifList = async (query, limit = 25, offset = 0, rating = 'g', lang = 'en') => {
    try {
        return await Axios.get(
            `https://api.giphy.com/v1/gifs/search?api_key=P4pWZwgvgYFxzcmQsqcaku65LWVUm2or&q=${query}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}`
        ).then((result) => {
            return result.data
        });
    } catch (error) {
        return error;
    }
}