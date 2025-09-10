import { useStorageMovies } from "@/store/useStorageMovies";
import HeartOutline from "@/assets/icons/heart.svg?react";
import HeartFilled from "@/assets/icons/heart-filled.svg?react";
import styles from "./MovieLike.module.css";

/**
 * @typedef {Object} MovieLikeProps
 * @property {Object} movie - Объект фильма (должен содержать imdbID и другие поля)
 */

/**
 * Кнопка "лайк/избранное" для фильма.
 * @param {MovieLikeProps} props
 */
export const MovieLike = ({ movie }) => {
    // Подписываемся только на нужные части стора:
    const liked = useStorageMovies((state) => state.isFavorite(movie.imdbID));
    const toggleFavorite = useStorageMovies((state) => state.toggleFavorite);

    const handleLike = (e) => {
        e.stopPropagation();
        toggleFavorite(movie);
    };

    return (
        <button
            type="button"
            aria-pressed={liked}
            onClick={handleLike}
            className={styles.likeButton}
        >
            {liked ? (
                <HeartFilled className={styles.heartIcon} aria-hidden />
            ) : (
                <HeartOutline className={styles.heartIcon} aria-hidden />
            )}
        </button>
    );
};