const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
const BASE_URL = "https://api.pexels.com/v1/";


 export const getPhotos = async (perPage = 20) => {
    const response = await fetch(`${BASE_URL}curated?per_page=${perPage}`, {
        headers: {
            Authorization: API_KEY,
        },
    });

    if (!response.ok){
        throw new Error('Failed to fetch');
    }

    const data = await response.json();
    return data.photos;
 };

  export const searchPhotos = async (query) => {
    const response = await fetch(`${BASE_URL}search?query=${encodeURIComponent(query)}&per_page=20`, {
        headers: {
            Authorization: API_KEY,
        },
    });

    if (!response.ok){
        throw new Error('Failed to fetch');
    }

    const data = await response.json();
    return data.photos;
 };

