import Axios from "axios"

// Get Search Results
export const fetchSearchResults = async (query, page = 1, searchId) => {
    try {
        return await Axios.get(
            `askbotler?bot_id=5f6bc49ea0cba36fd2e039e2${searchId ? '&search_id=' + searchId : ''}${query ? '&q=' + query : ''}&page=${page}`
        ).then((result) => {
            return result
        });
    } catch (error) {
        return error;
    }
}