

/**
 * Ищет фильм по ID
 * @param {import('axios').AxiosInstance} axiosInstance - экземпляр Axios
 * @param {string} id - ID фильма
 * @param {object} [params={}] - параметры запроса
 * @param {object} [mock={}] - мок-данные для тестов (опционально)
 * @returns {Promise<object>} - объект с результатами поиска
 */

export const getMovieById = async (axiosInstance, id, params = {}, mock = {}) => {

 if (mock && Object.keys(mock).length > 0) {
        return mock;
    }
 
    const response = await axiosInstance.get('', { params: { i: id, ...params } });
    
 try {
    if(response.data.Response === 'False') {
        throw new Error(response.data.Error);
    }
 }
 catch (error) {
    console.error(error);
 }
 
 return response.data;

};