import { create } from 'zustand';

export const useStorageMovies = create((set, get) => ({
  movies: [],
  favorites: [],
  searchMovies: '',
  isLoading: false,

  searchMoviesByName: (term) => set({ searchMovies: term }),

  // Установка состояния загрузки
  setLoading: (loading) => set({ isLoading: loading }),

  // Добавление фильмов
  updateDataMovies: ( moviesData ) => set((state) => ({
    movies: Array.from(new Map(moviesData.map(movie => [movie.imdbID, movie])).values()),
    isLoading: false
  })),
  
  // Добавление одного фильма в избранное
  addFavorite: (movie) => set((state) => ({
    favorites: [...state.favorites, movie]
  })),
  
  // Удаление из избранного по ID
  deleteFavoritesMovies: (movieId) => set((state) => ({
    favorites: state.favorites.filter(movie => movie.id !== movieId)
  })),
  
  // Проверка, находится ли фильм в избранном
  isFavorite: (movieId) => {
    const { favorites } = get();
    return favorites.some(movie => movie.id === movieId);
  },
  
  // Очистка всех данных
  clearMovies: () => set({
    movies: [],
    favorites: []
  }),

  getMovies: () => {
    const { movies } = get()

    return movies
  }
  

}));

export default useStorageMovies;