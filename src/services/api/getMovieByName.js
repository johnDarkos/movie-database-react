
/**
 * Ищет фильмы по названию
 * @param {import('axios').AxiosInstance} axiosInstance - экземпляр Axios
 * @param {string} name - название фильма
 * @param {object} [mock={}] - мок-данные для тестов (опционально)
 * @returns {Promise<object>} - объект с результатами поиска
 */
export const getMovieByName = async (axiosInstance, name, params = {}, mock = {}) => {
    if (mock && Object.keys(mock).length > 0) {
        return mock; // возвращаем моки, если переданы
    }

    try {
        const response = await axiosInstance.get('', { params: { s: name, ...params } });
        return response.data;
    } catch (err) {
        console.error('Ошибка при поиске фильма:', err);
        return {};
    }
};
