
/**
 * Ищет фильмы по названию
 * @param {import('axios').AxiosInstance} axiosInstance - экземпляр Axios
 * @param {string} name - название фильма
 * @param {object} [mock={}] - мок-данные для тестов (опционально)
 * @returns {Promise<object>} - объект с результатами поиска
 */
export const getMovieByName = async (axiosInstance, name, mock = {}) => {
    if (mock && Object.keys(mock).length > 0) {
        return mock; // возвращаем моки, если переданы
    }

    const params = {
        s: name, 
        type: 'movie',
    };

    try {
        const response = await axiosInstance.get('', { params });
        return response.data;
    } catch (err) {
        console.error('Ошибка при поиске фильма:', err);
        return {};
    }
};
