import useStorageMovies from "@/store/useStorageMovies";
import { MovieCardItem } from "./MovieCardItem";
import { MovieCardSkeleton } from "./MovieCardSkeleton.jsx";
import "./MovieCard.css";

/**
 * Компонент MovieCard для отображения карточек фильмов
 * @param {object} props - свойства компонента
 * @param {string} props.className - дополнительные CSS классы
 * @param {boolean} props.showSkeleton - показывать ли скелетон
 * @param {number} props.skeletonCount - количество скелетонов
 * @returns {JSX.Element} компонент MovieCard
 */

export const MovieCardWrapper = ({ className = "" }) => {
  const { movies, isLoading } = useStorageMovies();
  const uniqueMovies = Array.from(new Map(movies.map(movie => [movie.imdbID, movie])).values());

  return (
    <>
      {isLoading && <MovieCardSkeleton />}
      {uniqueMovies.map(movie => (
        <MovieCardItem key={movie.imdbID} {...movie} className={className} />
      ))}
    </>
  );
};