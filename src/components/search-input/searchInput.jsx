import styles from "./searchInput.module.css";
import { useStorageMovies } from "@/store/useStorageMovies";
import { getMovieByName } from "@/services/api/getMovieByName";
import { useOmdbMoviesApi } from "@/services/api/OMDB/useOmdbApi";
import { Button } from "@/components/button/button";
import { useState } from "react";

/**
 * Компонент SearchInput для поиска фильмов
 * @param {object} props - свойства компонента
 * @param {string} props.placeholder - placeholder для input
 * @returns {JSX.Element} компонент SearchInput
 */


export const SearchInput = (props) => {
  const { searchMoviesByName, updateDataMovies, getMovies, clearMovies, setLoading, isLoading } = useStorageMovies();
  const [searchValue, setSearchValue ] = useState("");

  // Функция для обработки поиска
  const handleSearch = async () => {
    if (!searchValue.trim()) return;
    
    clearMovies();
    setLoading(true);
    searchMoviesByName(searchValue);
    
    try {
      const response = await getMovieByName(useOmdbMoviesApi, searchValue, { type: 'movie', plot: 'short' });
      const movies = response.Search || [];
      updateDataMovies(movies);
      console.log(response);
      console.log(getMovies());
    } catch (err) {
      console.error("Ошибка поиска:", err);
      setLoading(false);
    }
  };

  // Обработчик нажатия Enter в инпуте
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles.searchMovieContainer}>
      <input
        className={styles.searchInputMovie}
        type="search"
        placeholder={props.placeholder}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
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