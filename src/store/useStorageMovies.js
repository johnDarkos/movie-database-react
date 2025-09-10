import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

/**
 * @typedef {Object} Movie
 * @property {string} imdbID Уникальный идентификатор фильма
 * @property {string} Title Название фильма
 * @property {string} Year Год выпуска фильма
 * @property {string} Type Тип (movie, series и т.д.)
 * @property {string} Poster URL постера фильма
 */

/**
 * Zustand store для управления фильмами и избранным в localStorage.
 *
 * @function useStorageMovies
 * @returns {{
 *   movies: Movie[], // Список фильмов
 *   favorites: Movie[], // Список избранных фильмов
 *   searchMovies: string, // Поисковый запрос
 *   isLoading: boolean, // Состояние загрузки
 *   searchMoviesByName: (term: string) => void, // Установить поисковый запрос
 *   setLoading: (loading: boolean) => void, // Установить состояние загрузки
 *   updateDataMovies: (moviesData: Movie[]) => void, // Обновить список фильмов
 *   addFavoritesMovies: (movie: Movie) => void, // Добавить фильм в избранное
 *   deleteFavoritesMovies: (movieId: string) => void, // Удалить фильм из избранного
 *   toggleFavorite: (movie: Movie) => void, // Переключить избранное для фильма
 *   isFavorite: (movieId: string) => boolean, // Проверить, в избранном ли фильм
 *   getFavorites: () => Movie[], // Получить список избранных фильмов
 *   clearMovies: () => void, // Очистить список фильмов (без удаления избранного)
 *   getMovies: () => Movie[] // Получить список всех фильмов
 * }}
 */
export const useStorageMovies = create(
  persist(
    /**
     * @param {Function} set Функция для установки состояния
     * @param {Function} get Функция для получения состояния
     * @returns {Object} Методы и состояние для работы с фильмами и избранным
     */
    (set, get) => ({
      /** @type {Movie[]} Список фильмов */
      movies: [],
      /** @type {Movie[]} Список избранных фильмов */
      favorites: [],
      /** @type {string} Фильтр фильмов */
      filterMovies: 'all',
      /** @type {string} Поисковый запрос */
      searchMovies: '',
      /** @type {boolean} Состояние загрузки */
      isLoading: false,

      /**
       * Устанавливает поисковый запрос для фильмов.
       * @param {string} term Поисковый запрос
       * @returns {void}
       */
      searchMoviesByName: (term) => set({ searchMovies: term }),
      /**
       * Устанавливает фильтр фильмов.
       * @param {string} filter Фильтр фильмов
       * @returns {void}
       */
      setFilterMovies: (filter) => set({ filterMovies: filter }),

      /**
       * Устанавливает состояние загрузки.
       * @param {boolean} loading Состояние загрузки
       * @returns {void}
       */
      setLoading: (loading) => set({ isLoading: loading }),

      /**
       * Обновляет список фильмов, убирая дубликаты по imdbID.
       * @param {Movie[]} moviesData Массив фильмов
       * @returns {void}
       */
      updateDataMovies: (moviesData) =>
        set(() => ({
          movies: Array.from(
            new Map(moviesData.map((movie) => [movie.imdbID, movie])).values()
          ),
          isLoading: false,
        })),

      /**
       * Добавляет фильм в избранное.
       * @param {Movie} movie Фильм для добавления
       * @returns {void}
       */
      addFavoritesMovies: (movie) =>
        set((state) => ({
          favorites: [...state.favorites, movie],
        })),

      /**
       * Удаляет фильм из избранного по imdbID.
       * @param {string} movieId ID фильма
       * @returns {void}
       */
      deleteFavoritesMovies: (movieId) =>
        set((state) => ({
          favorites: state.favorites.filter(
            (movie) => movie.imdbID !== movieId
          ),
        })),

      /**
       * Переключает состояние избранного для фильма.
       * @param {Movie} movie Фильм для переключения
       * @returns {void}
       */
      toggleFavorite: (movie) => {
        const { favorites, addFavoritesMovies, deleteFavoritesMovies } = get();
        const isFav = favorites.some((fav) => fav.imdbID === movie.imdbID);
        if (isFav) {
          deleteFavoritesMovies(movie.imdbID);
        } else {
          addFavoritesMovies(movie);
        }
      },

      /**
       * Проверяет, находится ли фильм в избранном.
       * @param {string} movieId ID фильма
       * @returns {boolean} true, если фильм в избранном
       */
      isFavorite: (movieId) => {
        const { favorites } = get();
        return favorites.some((movie) => movie.imdbID === movieId);
      },

      /**
       * Возвращает список избранных фильмов.
       * @returns {Movie[]} Массив избранных фильмов
       */
      getFavorites: () => {
        const { favorites } = get();
        return favorites;
      },

      /**
       * Очищает список фильмов, не затрагивая избранное.
       * @returns {void}
       */
      clearMovies: () =>
        set((state) => ({
          movies: [],
          favorites: state.favorites,
        })),

      /**
       * Возвращает список всех фильмов.
       * @returns {Movie[]} Массив всех фильмов
       */
      getMovies: () => {
        const { movies } = get();
        return movies;
      },
    }),
    {
      name: 'MovieFavorites',
      partialize: (state) => ({
        favorites: state.favorites,
      }),
    }
  )
);

export default useStorageMovies;