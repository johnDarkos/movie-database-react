import styles from "./searchInput.module.css";
import { useStorageMovies } from "@/store/useStorageMovies";
import { getMovieByName } from "@/services/api/getMovieByName";
import { useOmdbMoviesApi } from "@/services/api/OMDB/useOmdbApi";
import { Button } from "../button/movie-search/button";
import { useState, useCallback } from "react";

/**
 * Компонент SearchInput для поиска фильмов
 * @param {object} props - свойства компонента
 * @param {string} props.placeholder - placeholder для input
 * @returns {JSX.Element} компонент SearchInput
 */


export const SearchInput = (props) => {
  const { searchMoviesByName, updateDataMovies, getMovies, clearMovies, setLoading, isLoading, filterMovies } = useStorageMovies();
  const [searchValue, setSearchValue ] = useState("");

  // Функция для обработки поиска
  const handleSearch = useCallback(async () => {
    if (!searchValue.trim()) return;

    clearMovies();
    setLoading(true);
    searchMoviesByName(searchValue);

    try {
      // Учитываем выбранный фильтр при поиске
      const searchType = filterMovies === 'all' ? undefined : filterMovies;
      const response = await getMovieByName(useOmdbMoviesApi, searchValue, {
        type: searchType,
        plot: 'short'
      });
      const movies = response.Search || [];
      updateDataMovies(movies);
    } catch (err) {
      console.error("Ошибка поиска:", err);
      setLoading(false);
    }
  }, [searchValue, filterMovies, clearMovies, setLoading, searchMoviesByName, updateDataMovies]);

  // Обработчик нажатия Enter в инпуте
  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }, [handleSearch]);

  // Обработчик изменения значения инпута
  const handleInputChange = useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);

  return (
    <div className={styles.searchMovieContainer}>
      <input
        className={styles.searchInputMovie}
        type="search"
        placeholder={props.placeholder}
        value={searchValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <Button 
        text={isLoading ? "Searching..." : "Search"}
        onClick={handleSearch}
        disabled={isLoading || !searchValue.trim()}
      />
    </div>
  );
};