import "@/components/search-input/searchInput.css";
import { useStorageMovies } from "@/store/useStorageMovies";
import { getMovieByName } from "@/api/getMovieByName";
import { useOmdbMoviesApi } from "@/api/OMDB/useOmdbApi";
import debounce from "@/utils/debounce";
import { useCallback } from "react";

/**
 * Компонент SearchInput для поиска фильмов
 * @param {object} props - свойства компонента
 * @param {string} props.placeholder - placeholder для input
 * @returns {JSX.Element} компонент SearchInput
 */


export const SearchInput = (props) => {
  const { searchMoviesByName } = useStorageMovies();

  // Оборачиваем handleSearch в debounce, чтобы не было лишних запросов
  const debouncedSearch = useCallback(
    debounce(async (value) => {
      searchMoviesByName(value);
      try {
        const response = await getMovieByName(useOmdbMoviesApi, value);
        console.log(response);
      } catch (err) {
        console.error("Ошибка поиска:", err);
      }
    }, 500),
    [searchMoviesByName]
  );

  return (
    <div className="search__movie__container">
      <input
        className="search__input__movie"
        type="search"
        placeholder={props.placeholder}
        onChange={(e) => debouncedSearch(e.target.value)}
      />
    </div>
  );
};