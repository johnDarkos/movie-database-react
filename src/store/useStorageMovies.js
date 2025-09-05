import { create } from 'zustand';

export const useStorageMovies = create((set, get) => ({
  movies: [],
  favorites: [],
  searchMovies: '',


  searchMoviesByName: (term) => set({ searchMovies: term }),

  // Добавление фильмов
  updateDataMovies: (newData) => set((state) => ({
    movies: [...state.movies, ...newData]
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
  

}));

export default useStorageMovies;