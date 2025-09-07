import axios from "axios";


/**
 * @returns {import('axios').AxiosInstance} экземпляр Axios
 * @description Функция для создания экземпляра Axios для работы с API OMDB
 */

export const useOmdbMoviesApi = axios.create({
    baseURL: import.meta.env.VITE_OMDB_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    params: {
        apikey: import.meta.env.VITE_OMDB_API_KEY,
    },
})